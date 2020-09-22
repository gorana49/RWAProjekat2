
export interface IUser
{
    id?:number;
    username:string;
    password:string;
    email:string;
    role:string;
    roleflag:boolean;
    pib:string;
    visited:number[];
    komentari:Array<number>;
}
export class User implements IUser{
    id?:number;
    username:string;
    password:string;
    email:string;
    role:string;
    roleflag:boolean;
    pib:string;
    visited:Array<number> = [];
    komentari:Array<number>;

    constructor(values: User = null) {
        if(values != null)
        {
            Object.assign(this, values);
             this.visited = [...values.visited];
             this.komentari = [...values.komentari];
        }
    }
}


