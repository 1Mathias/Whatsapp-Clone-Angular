import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  @Output() conversationClicked: EventEmitter<any> = new EventEmitter();

  conversations = [
    {
      name: 'David',
      time: '8:21 AM',
      lastestMessage: 'Good Morning',
      latestMessageRead: false,
      message: [
        { id: 1, body: 'Hello world', time: '8:12', me: true },
        { id: 1, body: 'Hello Hello Jalo', time: '8:12', me: false },
        { id: 1, body: 'Hello world', time: '8:12', me: true },
        { id: 1, body: 'Bye Bye world', time: '8:12', me: false },
      ],
    },
    {
      name: 'James',
      time: '8:21 AM',
      lastestMessage: 'Good Morning',
      latestMessageRead: true,
      message: [
        { id: 1, body: 'Hello world', time: '8:12', me: true },
        { id: 1, body: 'Hello Back', time: '8:12', me: false },
        { id: 1, body: 'Hello world', time: '8:12', me: true },
        { id: 1, body: 'Hello world', time: '8:12', me: false },
      ],
    },
    {
      name: 'Andrew',
      time: '8:21 AM',
      lastestMessage: 'Good Morning',
      latestMessageRead: false,
      message: [
        { id: 1, body: 'Hello world', time: '8:12', me: true },
        { id: 1, body: 'Back Back', time: '8:12', me: false },
        { id: 1, body: 'Hello world', time: '8:12', me: true },
        { id: 1, body: 'Bye world', time: '8:12', me: false },
      ],
    },
    {
      name: 'Richard',
      time: '8:21 AM',
      lastestMessage: 'Good Morning',
      latestMessageRead: false,
      message: [
        { id: 1, body: 'Hello world', time: '8:12', me: true },
        { id: 1, body: 'Hello Back', time: '8:12', me: false },
        { id: 1, body: 'Hello world', time: '8:12', me: true },
        { id: 1, body: 'Hello Bye', time: '8:12', me: false },
      ],
    },
    {
      name: 'Dyno',
      time: '8:21 AM',
      lastestMessage: 'Good Morning',
      latestMessageRead: false,
      message: [
        { id: 1, body: 'Hello world', time: '8:12', me: true },
        { id: 1, body: 'Hello Back', time: '8:12', me: false },
        { id: 1, body: 'Hello world', time: '8:12', me: true },
        { id: 1, body: 'Hello Bye', time: '8:12', me: false },
      ],
    },
    {
      name: 'Julie',
      time: '8:21 AM',
      lastestMessage: 'Good Morning',
      latestMessageRead: true,
      message: [
        { id: 1, body: 'Hello world', time: '8:12', me: true },
        { id: 1, body: 'Hello Back', time: '8:12', me: false },
        { id: 1, body: 'Hello world', time: '8:12', me: true },
        { id: 1, body: 'Bye world', time: '8:12', me: false },
      ],
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
