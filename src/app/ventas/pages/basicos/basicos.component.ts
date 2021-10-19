import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

  nombreLower: string = 'antonio';
  nombreUpper: string = 'ANTONIO';
  nombreCompleto: string = 'aNtOnio cHIcano';


  fecha: Date = new Date(); //para poner la fecha de hoy

}
