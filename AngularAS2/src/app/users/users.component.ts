import { Component } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {
  userList = [
    {
      Id: 1001,
      Name: 'Raj',
      Sallary: 12550,
      Avatar: '../assets/defaultUser.png',
      IsAdmin: true,
      Details: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.'      
    },
    {
      Id: 1002,
      Name: 'Raja',
      Sallary: 12500,
      Avatar: '../assets/defaultUser.png',
      IsAdmin: false,
      Details: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.'      
    }
  ]
}
