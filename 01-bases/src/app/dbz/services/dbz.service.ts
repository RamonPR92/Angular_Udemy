import { Injectable } from "@angular/core";
import { Personaje } from '../inerfaces/dbz.interface';


//Los servicios se inicializan una sola vez
//Es como un singleton
@Injectable()
export class DBZService {

    private _personajes: Personaje[] = [
        {
            nombre: 'Goku',
            poder: 15000
        },
        {
            nombre: 'Krillin',
            poder: 700
        },
        {
            nombre: 'Vegeta',
            poder: 11000
        }
    ];

    //operador spread (...) devuelve una nueva referencia del arreglo
    get personajes() :Personaje[]{
        return [... this._personajes];
    }

    agregarPersonaje(personaje:Personaje){
    this._personajes.push(personaje);
  }

}