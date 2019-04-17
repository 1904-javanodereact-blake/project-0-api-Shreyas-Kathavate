import express from 'express';
import { authMiddleware } from '../middleware/auth.middleware';
import * as reimbursementDao  from '../daos/Reimbursement.dao';
import { Reimbursement } from '../model/Reimbursement';
/**
 * User router will handle all requests starting with
 *  /users
 */
export const ReimbursementRouter = express.Router();
export const ReimbursementType = express.Router();

//find reimbursement status by author
ReimbursementRouter.get('/author/userId/:userId', [
  authMiddleware(['Admin', 'FinanceManager']), 
  async(req, res) => {
    const userId = +req.params.userId;
    console.log(`retreiving user with id: ${userId}`);
    const data = await reimbursementDao.findReimbursementbyAuthor(userId);
    res.json(data);
  }]);

//find reimbursement status by status
 ReimbursementRouter.get('/status/:statusId', [
   authMiddleware(['Admin', 'FinanceManager']), 
   async(req, res) => {
     const statusId = +req.params.statusId;
     console.log(`retreiving user with id: ${statusId}`);
     const data = await reimbursementDao.findbystatusId(statusId);
     res.json(data);
   }]);
// submit the reimbursement with post 

 ReimbursementRouter.post('', async (req, res) => {
  const body = req.body;
   const newReimbursement = new Reimbursement(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);
   for (const field in newReimbursement) {
       if (body[field] != undefined) {
           newReimbursement[field] = body[field];
       }
   }  const finalReimbursement = await reimbursementDao.postReimbursement(newReimbursement);
   
   if (finalReimbursement) {
     // attach the user data to the session object
     res.status(201).send(finalReimbursement);
   } else {
     res.status(400).send('Reimbursement FAIL, Try Again!');
   }
  
 })
ReimbursementRouter.patch('', [
  authMiddleware(['Admin']), 
  async (req, res) => {
    const { reimbursement_id } = req.body;
    console.log('hi');
    const prevRecord = await reimbursementDao.findByReimbursement(reimbursement_id);

    for(let key in prevRecord){
      if ((prevRecord[key] !== req.body[key]) && (req.body[key] !== undefined)){
        prevRecord[key] = req.body[key];
      }
    }
    await reimbursementDao.updateReimbursements(reimbursement_id, prevRecord.author, 
      prevRecord.amount, prevRecord.date_submitted, prevRecord.date_resolved, prevRecord.description, prevRecord.resolver, prevRecord.status, prevRecord.type);
    const newUser = await reimbursementDao.findByReimbursement(reimbursement_id);
    res.json(newUser);
    
  }]);


