import { SqlProj } from '../dto/ReimbursementStatus.dto';
import { ReimbursementStatus } from '../model/ReimbursementStatus';


export function convertSqlProj(proj: SqlProj) {
  return new ReimbursementStatus(proj.status_id, proj.status,);
}