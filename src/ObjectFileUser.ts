
import { User } from './model/user';
import { Role } from './model/Role';
import { Reimbursement } from './model/Reimbursement';
import { ReimbursementStatus } from './model/ReimbursementStatus';
import { ReimbursementType } from './model/ReimbursementType';


export let user: User[] = [
   new User(0, '', '', '', '', '', ''),
   new User(0, '', '', '', '', '', ''),
   new User(0, '', '', '', '', '', ''),
   new User(0, '', '', '', '', '', ''),
   new User(0, '', '', '', '', '', '')
];
export let roles: Role[] = [
   new Role(0, ''),
   new Role(0, ''),
   new Role(0, ''),
   new Role(0, '')
];
export let reimbursement: Reimbursement[] = [
new Reimbursement(0, 0, 0, 0, 0,'',0,0,0 ),
new Reimbursement(0, 0, 0, 0, 0,'',0,0,0 ),
new Reimbursement(0, 0, 0, 0, 0,'',0,0,0 ),
new Reimbursement(0, 0, 0, 0, 0,'',0,0,0 ),
new Reimbursement(0, 0, 0, 0, 0,'',0,0,0 ),
]
export let reimbursementstatus: ReimbursementStatus[] = [
   new ReimbursementStatus(0, ''), 
   new ReimbursementStatus(0, ''),
]
export let reimbursementtype: ReimbursementType[] = [
   new ReimbursementType(0, ''),
   new ReimbursementType(0, '')
] ;
