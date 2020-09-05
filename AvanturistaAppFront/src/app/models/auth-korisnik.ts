export interface IAuthKorisnik{
    Username:string;
    Sifra:string;
}

export class AuthKorisnik implements IAuthKorisnik{
    Username: string;
    Sifra: string;

    constructor(user: string, pass: string){
        this.Username = user;
        this.Sifra = pass;
    }
}
