import { SqlProj } from '../dto/userRole.dto';
import { Role } from '../model/Role';


export function convertSqlProj(proj: SqlProj) {
  return new Role(proj.role_id, proj.user_role,);
}