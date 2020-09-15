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
    poseceno :Array<number>;
    komentari: number[];
   // addVisited(advantureNumber:number);
}
export class User implements User{
    id?:number;
    username:string;
    password:string;
    email:string;
    role:string;
    roleflag:boolean;
    pib:string;
    poseceno :Array<number>;
    komentari: number[];
 //ovo su sve pokušaji koji nisu uspeli
    constructor(){
       // this.poseceno = [];
    }

    // addVisited(advantureNumber:number):any
    // {
    //     this.poseceno.push(advantureNumber);
    // }
}


