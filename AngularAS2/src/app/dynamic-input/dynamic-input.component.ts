import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dynamic-input',
  standalone: true,
  imports: [],
  templateUrl: './dynamic-input.component.html',
  styleUrl: './dynamic-input.component.css'
})
export class DynamicInputComponent {
  @Input() myTextField: string = '';
}
