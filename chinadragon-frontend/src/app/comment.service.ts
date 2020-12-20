import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Comment } from '../app/comment';
@Injectable({
  providedIn: 'root'
})
export class CommentService {
  private baseURL = "http://localhost:8080/api/comments";

  constructor(private httpClient: HttpClient) { }

  createComment(comment: Comment): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`,comment);
  }
}
