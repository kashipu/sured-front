import { Component } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-money-show',
  imports: [CurrencyPipe],
  templateUrl: './money-show.component.html',
  styleUrl: './money-show.component.css'
})
export class MoneyShowComponent {
money = 500000;
}
