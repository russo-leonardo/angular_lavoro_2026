import { Component } from '@angular/core';
import { UserList } from '../user-list/user-list';

@Component({
  selector: 'app-user-item',
  imports: [],
  templateUrl: './user-item.html',
  styleUrl: './user-item.css',
})
export class UserItem {
name: string;
constructor() { 
    this.name = 'Felipe'; // setta il nome nel costruttore
  }
}

