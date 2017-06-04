import { Component } from '@angular/core';

@Component({
  selector : 'error',
  templateUrl: '../views/error.html'
})

export class ErrorComponent {
  public titulo : string;

  constructor() {
    this.titulo = 'ERROR 404: Pagina no encontrada.';
  }

  ngOnInit(){
    console.log('Component error.component.ts cargado.');
  }
}
