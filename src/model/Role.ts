export class Role
{
    roleId: number // primary key
    user_role: string // not null, unique
    constructor(roleId: number, user_role: string)
    {
      this.roleId = roleId;
      this.user_role = user_role;
    }
  }
