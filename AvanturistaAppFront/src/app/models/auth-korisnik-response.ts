export interface IAuthKorisnikResponse{
    Id:number;
    Username: string;
    Role: string;
}

export class AuthKorisnikResponse implements IAuthKorisnikResponse{
    Id:number;
    Username: string;
    Role: string;
}