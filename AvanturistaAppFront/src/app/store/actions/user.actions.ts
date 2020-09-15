import { Action } from '@ngrx/store';
import {User} from '../../models/user'

export enum UserActionsTypes{
    //LOGIN_USER='[Login User]',
    USER_LOGOUT='[User Logout]',
    DODAJ_MOJU_AVANTURU = '[Dodaj Avanturu]',
    DODAJ_MOJU_AVANTURU_USPESNO = '[Dodaj Avanturu Uspesno]',
    DODAJ_KOMENTAR = '[Dodaj Komentar]',
    DODAJ_KOMENTAR_USPESNO = '[Dodaj Komentar Uspesno]',
    LOAD_USER = '[Load User]',
    LOAD_USER_SUCCESS='[Load User Success]'
}


export class LoadUser implements Action{
    readonly type=UserActionsTypes.LOAD_USER;
    constructor(public id:number){}
}

export class LoadUserSuccess implements Action{
    readonly type=UserActionsTypes.LOAD_USER_SUCCESS;
    constructor(public user:User){}
}

export class DodajMojuAvanturu implements Action{
    readonly type=UserActionsTypes.DODAJ_MOJU_AVANTURU;
    constructor(public user:User){}
}

export class DodajMojuAvanturuUspesno implements Action{
    readonly type=UserActionsTypes.DODAJ_MOJU_AVANTURU_USPESNO;
    constructor(public user:User){        console.log(user);}
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
=   UserLogout
| DodajMojuAvanturu
|DodajKomentar
|DodajMojuAvanturuUspesno
|LoadUserSuccess
|LoadUser
|DodajKomentarUspesno;