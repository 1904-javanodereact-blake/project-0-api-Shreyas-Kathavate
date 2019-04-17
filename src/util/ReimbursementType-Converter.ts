import { SqlProj } from '../dto/ReimbursementType.dto';
import { ReimbursementType } from '../model/ReimbursementType';


export function convertSqlProj(proj: SqlProj) {
  return new ReimbursementType(proj.type_id, proj.type);
}