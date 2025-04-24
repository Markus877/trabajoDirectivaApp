import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  titulo = 'Registro de usuarios';
  mensaje="";
  registrado = false;
  nombre:String = "";
  apellido:String = "";
  cargo:String = "";
  entradas:Array<{titulo:string}>;
  
  constructor(){
    this.entradas = [
      {titulo:"Python cada día más presente."},
      {titulo:"Angular es un framework de JavaScript."},
      {titulo:"JavaScript es un lenguaje de programación."},
      {titulo:"Java es un lenguaje de programación."},
      {titulo:"C# es un lenguaje de programación."},
    ];
  }

  registrarUsuario(){
    this.registrado = true;

    this.mensaje = "Usuario registrado correctamente";
  }
}
