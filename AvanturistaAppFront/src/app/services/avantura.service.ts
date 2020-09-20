import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {Comment} from '../models/komentar'
import { urlAdresa } from '../constants/url'
import { Adventure } from '../models/adventure';

const adventure_url = urlAdresa.ADVENTURE_URL;
const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };
@Injectable({
  providedIn: 'root'
})

export class AdventureService {

  constructor(private http:HttpClient) {}

   public getAllAdventures():Observable<Adventure[]>{
    return this.http.get<Adventure[]>(adventure_url);
   }

   public addAdventure(adventure:Adventure):Observable<Adventure>{
    if(adventure)
    {
      return this.http.post<Adventure>(adventure_url,adventure)
    }
  }
  
   public updateAdventure(adventure:Adventure):Observable<any>{
    return this.http.put<Adventure>(`${adventure_url}/${adventure.id}`,adventure,httpOptions)
  }

}