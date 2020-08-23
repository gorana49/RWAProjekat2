export interface IAuthKorisnikResponse{
    Username: string;
    Role: string;
    Token: string;

}

export class AuthKorisnikResponse implements IAuthKorisnikResponse{
    Username: string;
    Role: string;
    Token: string;
}