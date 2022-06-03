import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements OnInit {
  @Input() conversation: any;
  constructor() {}

  ngOnInit(): void {}

  submitMessage(event:any){
    let value=event.target.value.trim();
    event.target.value='';
    this.conversation.lastestMessage=value;
    this.conversation.message.unshift({
      id:1,
      body:value,
      time:'8:21',
      me:true,
    })

  }
}
