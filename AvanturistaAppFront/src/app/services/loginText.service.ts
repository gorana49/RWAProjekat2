import { Injectable } from '@angular/core';
import { IAuthKorisnik } from '../models/auth-korisnik';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import {urlAdresa} from '../constants/url'
import {AuthKorisnikResponse} from "../models/auth-korisnik-response"
import { User } from '../models/user';
const users_url=urlAdresa.USER_URL;

  
  @Injectable({
      providedIn: 'root'
  })
export class LoginTextService {
    constructor(private http:HttpClient) {
        this.http=http;
       }

    getUser(authkorisnik: IAuthKorisnik): Observable<AuthKorisnikResponse> {
        console.log(authkorisnik);
        let url = users_url + `?username=${authkorisnik.Username}&&sifra=${authkorisnik.Sifra}`;
        return this.http.get<AuthKorisnikResponse>(url);
    }
    public userRegistration(user:User):Observable<User>{
        return this.http.post<User>(`${users_url}`,user);
      }
    logout(): void{

    }
}
