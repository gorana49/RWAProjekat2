import { Injectable } from '@angular/core';
import { AuthKorisnik, IAuthKorisnik } from '../models/auth-korisnik';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import {urlAdresa} from '../constants/url'
import {AuthKorisnikResponse} from "../models/auth-korisnik-response"
import { IUser, User } from '../models/user';
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

       public GetUserById(id:number):Observable<User>{
        return this.http.get<User>(`${users_url}?id=${id}`);
       }
    getUser(authkorisnik: AuthKorisnik): Observable<User> {
        let url = users_url + `?username=${authkorisnik.username}&&password=${authkorisnik.password}`;
        return this.http.get<User>(url);    
    }
    public userRegistration(user:User):Observable<User>{
        return this.http.post<User>(`${users_url}`,user);
      }

    public updateUser(user:User):Observable<User>{
      console.log("Gocki");
      console.log(user);
      if((user != null) && (user!=undefined))
      {
        let userPomocni = new User();
          userPomocni.id = user[0].id;
          userPomocni.username = user[0].username;
          userPomocni.password = user[0].password;
          userPomocni.email = user[0].email;
          userPomocni.pib = user[0].pib;
          userPomocni.role = user[0].role;
          userPomocni.roleflag = user[0].roleflag;
          userPomocni.visited = user.visited;
          userPomocni.komentari = user.komentari;
          return this.http.put<User>(`${users_url}/${userPomocni.id}`,userPomocni,httpOptions);
      }
    }
    logout(): void{

    }
}
