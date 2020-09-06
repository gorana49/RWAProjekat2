import { identifierModuleUrl } from '@angular/compiler';

export interface User
{
    id?:number;
    username:string;
    password:string;
    email:string;
    role:string;
    roleflag:boolean;
    pib:string;
    poseceno: [];
    komentari: [];
}
export class User implements User{
    id?:number;
    username:string;
    password:string;
    email:string;
    role:string;
    roleflag:boolean;
    pib:string;
    poseceno: [];
    komentari: [];

    constructor(id:number, username:string, password:string, email:string, role:string, roleflag:boolean, pib:string){// poseceno:[], komentari:[]) {
        this.id= id,
        this.username = username,
        this.password = password,
        this.email = email,
        this.role = role, 
        this.roleflag = roleflag,
        this.pib = pib,
       // this.poseceno = poseceno,
        //this.komentari = komentari
    }
}


