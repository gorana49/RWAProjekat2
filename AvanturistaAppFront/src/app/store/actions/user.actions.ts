import { Action } from '@ngrx/store';
import {User} from '../../models/user'

export enum UserActionsTypes{
    USER_LOGOUT='[User Logout]',
    UPDATE_MY_ADVENTURE = '[Update My Adventure]',
    UPDATE_MY_ADVENTURE_SUCCESS = '[Update My Adventure Success]',
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

export class UpdateMyAdventure implements Action{
    readonly type=UserActionsTypes.UPDATE_MY_ADVENTURE;
    constructor(public user:User){}
}

export class UpdateMyAdventureSuccess implements Action{
    readonly type=UserActionsTypes.UPDATE_MY_ADVENTURE_SUCCESS;
    constructor(public user:User){ console.log(user)}
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
| UpdateMyAdventure
|DodajKomentar
|UpdateMyAdventureSuccess
|LoadUserSuccess
|LoadUser
|DodajKomentarUspesno;