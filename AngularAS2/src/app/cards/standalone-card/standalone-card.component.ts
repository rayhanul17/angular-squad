import { Component } from '@angular/core';
import { DynamicInputComponent } from '../../dynamic-input/dynamic-input.component';

@Component({
  selector: 'app-standalone-card',
  standalone: true,
  imports: [DynamicInputComponent],
  templateUrl: './standalone-card.component.html',
  styleUrl: './standalone-card.component.css'
})
export class StandaloneCardComponent {
  Title: string = '';
}
