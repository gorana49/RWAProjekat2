import { Action } from '@ngrx/store';
import {User} from '../../models/user'

export enum UserActionsTypes{
    LOGIN_USER='[Login User]',
    USER_LOGOUT='[User Logout]',
    DODAJ_AVANTURU = '[Dodaj Avanturu]',
    DODAJ_AVANTURU_USPESNO = '[Dodaj Avanturu Uspesno]',
    DODAJ_KOMENTAR = '[Dodaj Komentar]',
    DODAJ_KOMENTAR_USPESNO = '[Dodaj Komentar Uspesno]'
}

export class LoginUser implements Action{
    readonly type=UserActionsTypes.LOGIN_USER;
    constructor(public payload: {user:User}){}
}
export class DodajAvanturu implements Action{
    readonly type=UserActionsTypes.DODAJ_AVANTURU;
    constructor(public user:User){}
}

export class DodajAvanturuUspesno implements Action{
    readonly type=UserActionsTypes.DODAJ_AVANTURU_USPESNO;
    constructor(public user:User){}
}

export class DodajKomentar implements Action{
    readonly type=UserActionsTypes.DODAJ_KOMENTAR;
    constructor(public user:User){}
}

export class DodajKomentarUspesno implements Action{
    readonly type=UserActionsTypes.DODAJ_KOMENTAR_USPESNO;
    constructor(public user:User){}
}

export class UserLogout implements Action{
    readonly type=UserActionsTypes.USER_LOGOUT;
    constructor(){}
}

export type UserActions 
= LoginUser 
| UserLogout
|DodajAvanturu
|DodajKomentar
|DodajAvanturuUspesno
|DodajKomentarUspesno;