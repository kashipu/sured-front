import { Component } from '@angular/core';
import { OptionButtonComponent } from "../../molecules/option-button/option-button.component";

@Component({
  selector: 'app-button-desk',
  imports: [OptionButtonComponent],
  templateUrl: './button-desk.component.html',
  styleUrl: './button-desk.component.css'
})
export class ButtonDeskComponent {
  botones = [
    { text: 'Juega \n aquí', icon: 'juega.svg' },
    { text: 'Recarga \n tu celu', icon: 'recarga.svg' },
    { text: 'Enviar \n dinero', icon: 'envia.svg' },
    { text: 'Paga tus \n facturas', icon: 'paga.svg' },
    { text: 'Compra \n contenido', icon: 'compra.svg' },
    { text: 'Recarga \n tu Betplay', icon: 'betplay.svg' },
    { text: 'Seguros', icon: 'seguros.svg' },
    { text: 'Cajero', icon: 'cajero.svg' }
  ]

}
