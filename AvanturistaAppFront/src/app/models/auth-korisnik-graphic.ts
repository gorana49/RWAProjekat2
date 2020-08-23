export interface IAuthKorisnikGraphic{
    Username:string;
}

export class AuthKorisnikGraphic implements IAuthKorisnikGraphic{
    Username: string;

    constructor(user: string){
        this.Username = user;
    }
}
