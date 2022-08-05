import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page/main-page.component';
import { FormsModule } from '@angular/forms';
import { PersonajesComponent } from './personajes/personajes.component';
import { AgregarPersonajeComponent } from './agregar-personaje/agregar-personaje.component';
import { DBZService } from './services/dbz.service';



@NgModule({
  //Agrega los componentes al modulo
  declarations: [
    MainPageComponent,
    PersonajesComponent,
    AgregarPersonajeComponent
  ],
  //Exporta los componentes del modulo
  exports: [
    MainPageComponent
  ],
  //Importaciones de librerias al modulo
  imports: [
    CommonModule,
    FormsModule
  ],
  //Agrega los servicios al modulo
  providers: [
    DBZService
  ]
})
export class DbzModule { }
