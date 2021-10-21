import { Component } from '@angular/core';
//import { rejects } from 'assert';
//import { resolve } from 'dns';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {

  //i18nSelect
  nombre: string = 'Antonio';
  genero: string = 'masculino';

  invitacionMapa = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }

  //i18nPlural
  clientes: string[] = ['Maria', 'Pedro', 'Juan', 'Antonio', 'Estefania'];
  clientesMapa = {
    '=0': 'no tenemos ningun cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    '=2': 'tenemos 2 clientes esperando.',
    'other': 'tenemos # clientes esperando.',
  }

  cambiarCliente() {
    this.nombre = 'Melisa';
    this.genero = 'femenino';
  }

  borrarCliente() {
    this.clientes.pop();
  }


  //keyvalue pipe
  persona = {
    nombre: 'Antonio',
    edad: 36,
    direccion: 'Málaga, España'
  }

  //json pipe
  heroes = [
    {
      nombre: 'Superman',
      vuela: true,
    },
    {
      nombre: 'Robin',
      vuela: false,
    },
    {
      nombre: 'Aquaman',
      vuela: false,
    }
  ]

  //async pipe
  miObservable = interval(1000);//0,1,2,3,4,5,6...

  valorPromesa = new Promise((resolve, rejects) => {
    setTimeout(() => {
      resolve('Tenemos data de promesa');
    }, 3500);
  });
}
