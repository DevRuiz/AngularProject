import { Component } from '@angular/core';
import {WebSocketService} from './services/web-socket.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Cliente';
  public wsService: WebSocketService;
  constructor(wsService: WebSocketService){
    this.wsService = wsService;
  }
}
