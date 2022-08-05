import { Component } from '@angular/core';
import { Personaje } from '../inerfaces/dbz.interface';
import { DBZService } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent{

  //(2)
  // get personajes(): Personaje[]{
  //   return this.dbzService.personajes;
  // }

  // (1) personajes: Personaje[] = [];
  // constructor(private dbzService: DBZService){
    // (1) this.personajes = dbzService.personajes;
  // }
}
