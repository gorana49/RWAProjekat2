import { User } from './user';
export interface AuthState{
    loggedIn:boolean;
    user:User
}

export class AuthState implements AuthState{
    loggedIn:boolean;
    user:User

    constructor(flag:boolean, user:User)
    {
        this.loggedIn= flag;
        this.user= user;
    }
}