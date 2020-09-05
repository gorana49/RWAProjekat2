import { HttpClient, HttpHeaders } from "@angular/common/http";
import {IAuthKorisnikGraphic} from "../models/auth-korisnik-graphic"
import { Observable } from "rxjs";
import {urlAdresa} from '../constants/url'
const users_url=urlAdresa.USER_URL;
const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'my-auth-token'
    })
};

export class LoginGraphService {
    //private apiUrl = 'http://localhost:4000/korisnik/authenticate';

    constructor(private http: HttpClient,
                //private router: Router) 
     ) { }

    getUserPass(authkorisnik: IAuthKorisnikGraphic): Observable<any> {
        return this.http.post<Object>(users_url, authkorisnik);
    }

}
