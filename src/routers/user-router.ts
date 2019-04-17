import express from 'express';
import { authMiddleware } from '../middleware/auth.middleware';
import * as userDao  from '../daos/user.dao';
/**
 * User router will handle all requests starting with
 *  /users
 */
export const userRouter = express.Router();


/**
 * 
 * find all users
 * endpoint: /users
 */
userRouter.get('', [
  authMiddleware(['Admin', 'FinanceManager']),
  async (req, res) => {
    const user = await userDao.findUsernames()
    res.json(user);

  }]);

/**
 * find user by id
 * endpoint: /users/:id
 */
userRouter.get('/:id', [
  authMiddleware(['Admin', 'FinanceManager']), 
  async(req, res) => {
    const id = +req.params.id;
    const data = await userDao.findById(id);
    if(data){
      res.json(data);
    }
    else {
      res.sendStatus(403);
    }
  }]);


userRouter.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const user_name = await userDao.UsernameLogin(username, password);
  if (user_name) {
    // attach the user data to the session object
    req.session.user = user_name;
    res.json(user_name)
  } else {
    res.sendStatus(401);
  }
})
// function to patch/update a user in the database.
userRouter.patch('', [
  authMiddleware(['Admin', 'FinanceManager']), 
  async (req, res) => {
    const { user_id } = req.body;
    console.log('hi');
    const prevRecord = await userDao.findById(user_id);

    for(let key in prevRecord){
      if ((prevRecord[key] !== req.body[key]) && (req.body[key] !== undefined)){
        prevRecord[key] = req.body[key];
      }
    }
    await userDao.updateUsernames(user_id, prevRecord.user_name, 
      prevRecord.password, 
      prevRecord.firstname, prevRecord.lastname, prevRecord.email, prevRecord.user_role)
    const newUser = await userDao.findById(user_id);
    res.json(newUser);
    
  }]);

