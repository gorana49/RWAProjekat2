import {Adventure} from "../models/adventure"

export interface IUserAdventures{
    Id:number;
    Username: string;
    Adventures: Adventure[];
}

export class UserAdventures implements IUserAdventures
{
    Id:number;
    Username: string;
    Adventures: Adventure[];
    constructor(id:number,username:string, adv:Adventure[])
    {
        this.Id = id;
        this.Username = username;
        this.Adventures=adv;
    }
}