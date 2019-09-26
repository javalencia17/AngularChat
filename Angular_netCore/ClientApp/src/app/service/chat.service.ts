import { Injectable, Inject } from '@angular/core';
import { Message } from '../Interfaces';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';


@Injectable({
  providedIn: 'root' 
})

export class ChatService {
  public baseUrl: string

  constructor(protected http: HttpClient ,@Inject("BASE_URL") baseUrl: string ) {
    this.baseUrl = baseUrl;
  }
   
  public getMessage(): Observable<Message[]> {
    return this.http.get<Message[]>(this.baseUrl + 'api/Chat/Message');
  }
}
