import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {komentar} from '../models/komentar'
import { urlAdresa } from '../constants/url'

const comments_url=urlAdresa.COMMENTS_URL;

@Injectable({
  providedIn: 'root'
})

export class CommentService {

  constructor(private http:HttpClient) {
    this.http=http;
   }

   public getAllComments():Observable<komentar[]>{
    return this.http.get<komentar[]>(`${comments_url}`);
   }

    postComment(comment:komentar):Observable<komentar>{
     return this.http.post<komentar>(`${comments_url}`,comment)
   }
}