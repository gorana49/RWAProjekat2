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
}
