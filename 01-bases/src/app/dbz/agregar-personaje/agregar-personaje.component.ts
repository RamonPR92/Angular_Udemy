import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../inerfaces/dbz.interface';
import { DBZService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar-personaje',
  templateUrl: './agregar-personaje.component.html',
  styleUrls: ['./agregar-personaje.component.css']
})
export class AgregarPersonajeComponent{

   //Objeto para mappear los datos del form
   nuevo : Personaje  = {
    nombre: '',
    poder: 0
  }

  constructor(private dbzService: DBZService){

  }

  //Es un evento que se dispara y entre sus datos tiene al nuevo personajes 
  //para enviarlo al componente padre
  // @Output() nuevoPersonajeEvento:EventEmitter<Personaje> = new EventEmitter();

  agregar(){
    if(this.nuevo.nombre.trim().length == 0){
      return;
    }

    //Dispara el evento
    // this.nuevoPersonajeEvento.emit(this.nuevo);
    this.dbzService.agregarPersonaje(this.nuevo);

    this.nuevo = {
      nombre: '',
      poder: 0
    }
  }
}
