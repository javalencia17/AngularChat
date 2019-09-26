import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { ChatService } from '../service/chat.service';
import { Message } from '../Interfaces';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'chat-app',
  templateUrl: './chat.component.html'
})

export class ChatComponent {
  public lstMessages: Observable<Message[]>;

  constructor(protected chatService: ChatService)
  {
    this.getInfo()    
  }
  public getInfo() {
    this.lstMessages = this.chatService.getMessage();
  }
}

