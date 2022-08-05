import { Component, Input} from '@angular/core';
import { Personaje } from '../inerfaces/dbz.interface';
import { DBZService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent  {

  //Espera la inyeccion de la propiedad por parte del componente padre
  // @Input()
  // personajes: Personaje[] = [];

  get personajes(){
    return this.dbzService.personajes;
  }
  
  constructor( private dbzService: DBZService){}

}
