import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-option-button',
  imports: [],
  templateUrl: './option-button.component.html',
  styleUrl: './option-button.component.css'
})
export class OptionButtonComponent {
@Input() text = 'Texto botón';
@Input() icon = '';
}
