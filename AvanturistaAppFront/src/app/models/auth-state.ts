import { AuthKorisnikResponse } from './auth-korisnik-response';
export interface AuthState{
    loggedIn:boolean;
    user:AuthKorisnikResponse;
}