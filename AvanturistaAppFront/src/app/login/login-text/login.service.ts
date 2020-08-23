import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { IAuthKorisnik } from './auth-korisnik';
import { HttpClient, JsonpClientBackend } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class LoginService {
    private apiUrl = 'http://localhost:4000/korisnik/authenticate';

    constructor(private http: HttpClient,
                public jwtHelper: JwtHelperService, 
                public cookieService: CookieService,
                private router: Router) { }

    getUser(authkorisnik: IAuthKorisnik): Observable<any> {
        return this.http.post<Object>(this.apiUrl, authkorisnik);
    }

    isLogged(): boolean{
        // get vraca cookie value, koji je zapravo token
        const token = this.cookieService.get('user');
        return !this.jwtHelper.isTokenExpired(token);
    }

    logout(): void{
        console.log('logout');
        this.cookieService.delete('user');
        console.log(this.cookieService.getAll());
        this.router.navigate(['./mainPage']);
    }
}
