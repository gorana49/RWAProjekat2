import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {Comment} from '../models/komentar'
import { urlAdresa } from '../constants/url'

const comments_url=urlAdresa.COMMENTS_URL;

@Injectable({
  providedIn: 'root'
})

export class CommentService {

  constructor(private http:HttpClient) {
    this.http=http;
   }

   public getAllComments():Observable<Comment[]>{
    return this.http.get<Comment[]>(`${comments_url}`);
   }

    postComment(comment:Comment):Observable<Comment>{
     return this.http.post<Comment>(`${comments_url}`,comment)
   }
}