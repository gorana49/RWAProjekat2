export interface IAuthKorisnik{
    username:string;
    password:string;
}

export class AuthKorisnik implements IAuthKorisnik{
    username: string;
    password: string;

    constructor(user: string, pass: string){
        this.username = user;
        this.password = pass;
    }
}
