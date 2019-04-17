
 export function authMiddleware (roles: string[]) {
  return (req, res, next) => {
    if(req.params.id) {
      if(req.session.user.user_id === +req.params.id){
        next();
      } else {
          const isAuthorized = req.session.user && roles.includes(req.session.user.user_role);
            if(isAuthorized) {
              next();
            } else {
              res.sendStatus(403);
            }
          }
      } else {
      const isAuthorized = req.session.user && roles.includes(req.session.user.user_role);
      if(isAuthorized) {
        next();
      } else {
        res.sendStatus(403);
      }
    }
 };
}   







 
// export function authMiddleware (roles: string[]) {
//   return (req, res, next) => {
//     const isAuthorized = req.session.user && roles.includes(req.session.user.user_role  );
//     if (isAuthorized) {
//       next();
//     } else {
//       res.sendStatus(403);
//     }
//   };
// }

