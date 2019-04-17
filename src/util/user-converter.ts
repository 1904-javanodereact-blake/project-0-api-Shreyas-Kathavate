import { SqlProj } from '../dto/user.dto';
import { User } from '../model/user';


export function convertSqlProj(proj: SqlProj) {
  return new User(proj.user_id, proj.user_name, 
    proj.password, proj.firstname, proj.lastname, proj.email, proj.user_role,);
}