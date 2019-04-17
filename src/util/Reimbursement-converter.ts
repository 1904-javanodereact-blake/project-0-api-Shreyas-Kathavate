import { SqlProj } from '../dto/Reimbursement.dto';
import { Reimbursement } from '../model/Reimbursement';


export function convertSqlProj(proj: SqlProj) {
  return new Reimbursement(proj.reimbursement_id, proj.author, 
    proj.amount, proj.date_submitted, proj.date_resolved, proj.description, proj.resolver, proj.status, proj.reimbursement_type);
}