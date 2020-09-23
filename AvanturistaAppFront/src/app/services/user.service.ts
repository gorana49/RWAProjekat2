import { Injectable } from '@angular/core';
import { LoggingUser } from '../models/logging-user';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import {urlAdresa} from '../constants/url'
import { IUser, User } from '../models/user';
import { map } from 'rxjs/operators';

const users_url=urlAdresa.USER_URL;
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};
  
  @Injectable({
      providedIn: 'root'
  })
export class UserService {
    constructor(private http:HttpClient) {}

    public GetUserById(id:number):Observable<User>{
      return this.http.get<User>(`${users_url}?id=${id}`).pipe(
          map( u => u[0])
    );}
      
    public getUser(authkorisnik: LoggingUser): Observable<User> {
        let url = users_url + `?username=${authkorisnik.username}&&password=${authkorisnik.password}`;
        return this.http.get<User>(url).pipe(map(user => user[0]))
    }

    public userRegistration(user:User):Observable<User>{
        return this.http.post<User>(`${users_url}`,user);
    }

    public GetUsers():Observable<User[]>{ return this.http.get<User[]>(`${users_url}`)};
  
    public updateUser(user:User):Observable<User>{
        if(user)
        {
          const usr = { ...user };
          return this.http.put<User>(`${users_url}/${usr.id}`,usr,httpOptions);
      }
    }
}
