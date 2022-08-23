import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html'
})
export class BusquedaComponent {

  //La anotacion hace referencia al input txtBuscar y lo pone en la variable txtBuscar que sera de tipo ElementRef<HTMLInputElement>
  //El oparador ! nos dice que si la refencia es null podria lanzar una excepcion
  @ViewChild('txtBuscar') 
  txtBuscar!:ElementRef<HTMLInputElement>;

  constructor(private gifsService: GifsService){}

  buscar(){
    let inputValue: string = this.txtBuscar.nativeElement.value;
    
    if(inputValue.trim().length === 0)
      return;

    this.gifsService.buscarGifs(inputValue);
    this.txtBuscar.nativeElement.value = '';
  }
}
