import { Component } from '@angular/core';
import { UserAgeComponent } from '../user-age/user-age.component';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [UserAgeComponent],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.css'
})
export class UserCardComponent {
    
}
