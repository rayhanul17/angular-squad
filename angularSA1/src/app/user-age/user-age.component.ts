import { Component } from '@angular/core';

@Component({
  selector: 'app-user-age',
  standalone: true,
  imports: [],
  templateUrl: './user-age.component.html',
  styleUrl: './user-age.component.css'
})
export class UserAgeComponent {
  Age: number = 25.6;
}
