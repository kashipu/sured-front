import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-service-buttons',
  imports: [],
  templateUrl: './service-buttons.component.html',
  styleUrl: './service-buttons.component.css'
})
export class ServiceButtonsComponent {
@Input() icon = "";
}
