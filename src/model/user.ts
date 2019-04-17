import { Role } from "./Role";

export class User {
  user_Id: number;
  user_name: string;
  password: string;
  firstname: string;
  lastname: string;
  email: string;
  user_role : Role;


  constructor(user_Id = 0, user_name = '', password = '', 
  firstname = '', lastName = '', user_role = undefined, email = '',) {
    this.user_Id = user_Id;
    this.user_name = user_name;
    this.password = password;
    this.firstname = firstname;
    this.lastname = lastName
    this.user_role = user_role;
    this.email = email;
  }
}