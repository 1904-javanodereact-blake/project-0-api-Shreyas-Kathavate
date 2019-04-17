export class Reimbursement
{
    reimbursementId: number; // primary key
    author: number;  // foreign key -> User, not null
    amount: number;  // not null
    date_Submitted: string; // not null
    date_Resolved: number;
    description: string; // not null
    resolver: number; // foreign key -> User
    status: number; // foreign ey -> ReimbursementStatus, not null
    type: number // foreign key -> ReimbursementType
    constructor(reimbursementId: number, author: number, 
      amount: number, dateSubmitted: string, dateResolved: number,
       description: string, resolver: number, status: number, type: number){
    this.reimbursementId = reimbursementId,
    this.author = author,
    this.amount = amount,
    this.date_Submitted = dateSubmitted,
    this.date_Resolved = dateResolved,
    this.description = description,
    this.status = status,
    this.resolver = resolver,
    this.type = type;
  }
}