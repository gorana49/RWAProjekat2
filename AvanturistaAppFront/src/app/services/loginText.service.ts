import { Injectable } from '@angular/core';
import { IAuthKorisnik } from '../models/auth-korisnik';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import {urlAdresa} from '../constants/url'
import {AuthKorisnikResponse} from "../models/auth-korisnik-response"
import { User } from '../models/user';
const users_url=urlAdresa.USER_URL;
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};
  
  @Injectable({
      providedIn: 'root'
  })
export class LoginTextService {
    constructor(private http:HttpClient) {
        this.http=http;
       }

    getUser(authkorisnik: IAuthKorisnik): Observable<User> {
        console.log(authkorisnik);
        let url = users_url + `?username=${authkorisnik.Username}&&sifra=${authkorisnik.Sifra}`;
        return this.http.get<User>(url);
    }
    public userRegistration(user:User):Observable<User>{
        return this.http.post<User>(`${users_url}`,user);
      }

      public updateUser(user:User):Observable<User>{
        return this.http.put<User>(`${users_url}/${user.id}`,user,httpOptions);
       }
    logout(): void{

    }
}
