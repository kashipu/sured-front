import { Component } from '@angular/core';
import { StatusBarComponent } from "../../organisms/status-bar/status-bar.component";
import { HeaderComponent } from "../../organisms/header/header.component";
import { MoneyShowComponent } from "../../molecules/money-show/money-show.component";
import { ActionSliderComponent } from "../../organisms/action-slider/action-slider.component";
import { ButtonDeskComponent } from "../../organisms/button-desk/button-desk.component";
import { HelpIconsComponent } from "../../molecules/help-icons/help-icons.component";
import { FixedOptionsComponent } from "../../organisms/fixed-options/fixed-options.component";

@Component({
  selector: 'app-home',
  imports: [StatusBarComponent, HeaderComponent, MoneyShowComponent, ActionSliderComponent, ButtonDeskComponent, HelpIconsComponent, FixedOptionsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
