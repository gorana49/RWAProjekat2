import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {komentar} from '../models/komentar'
import { urlAdresa } from '../constants/url'
import { Avantura } from '../models/avantura';

const avantura_url=urlAdresa.AVANTURA_URL;
const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };
@Injectable({
  providedIn: 'root'
})

export class AvanturaService {

  constructor(private http:HttpClient) {
    this.http=http;
   }

   public getAllAvanture():Observable<Avantura[]>{
    return this.http.get<Avantura[]>(avantura_url);
   }

   public dodajAvanturu(avantura:Avantura):Observable<Avantura>{
    if(avantura != null && avantura != undefined)
    {
      console.log("Avantura pre nego udje u post");
      return this.http.post<Avantura>(avantura_url,avantura)
    }
  }

   public updateAvanturu(avantura:Avantura):Observable<any>{
    return this.http.put<Avantura>(`${avantura_url}/${avantura.id}`,avantura,httpOptions)
  }

}