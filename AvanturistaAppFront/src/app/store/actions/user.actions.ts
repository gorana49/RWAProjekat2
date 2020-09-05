import { Action } from '@ngrx/store';
import {User} from '../../models/user'
import { AuthKorisnikResponse } from 'src/app/models/auth-korisnik-response';
export enum UserActionsTypes{
    LOGIN_USER='[Login User]',
    USER_LOGOUT='[User Logout]'
}

export class LoginUser implements Action{
    readonly type=UserActionsTypes.LOGIN_USER;
    constructor(public payload: {user:AuthKorisnikResponse}){}
}

export class UserLogout implements Action{
    readonly type=UserActionsTypes.USER_LOGOUT;
    constructor(){}
}

export type UserActions 
= LoginUser 
| UserLogout;