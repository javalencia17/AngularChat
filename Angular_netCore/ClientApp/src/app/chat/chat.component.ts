import { Component } from '@angular/core';

@Component({
  selector: 'chat-app',
  templateUrl: './chat.component.html'
})

export class ChatComponent {
  public lstMessages: string[] = ['hola mundo', 'pepe pecas', 'pica capas', 'otro'];

}
