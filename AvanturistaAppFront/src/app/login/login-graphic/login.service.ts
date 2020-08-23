import { HttpClient } from "@angular/common/http";
import {IAuthKorisnikGraphic} from "../../models/auth-korisnik-graphic"
import { Observable } from "rxjs";





export class LoginService {
    private apiUrl = 'http://localhost:4000/korisnik/authenticate';

    constructor(private http: HttpClient,
                public jwtHelper: JwtHelperService, 
                public cookieService: CookieService,
                //private router: Router) 
     ) { }

    getUserPass(authkorisnik: IAuthKorisnikGraphic): Observable<any> {
        return this.http.post<Object>(this.apiUrl, authkorisnik);
    }

}
