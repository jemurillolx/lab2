import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { CuadrocontenidoComponent } from './cuadrocontenido/cuadrocontenido.component';
import { FormularioagregarComponent } from './formularioagregar/formularioagregar.component';
import { RutinasComponent } from './rutinas/rutinas.component';
import { AtletasComponent } from './atletas/atletas.component';
import { FormularioeditarComponent } from './formularioeditar/formularioeditar.component';
import { FormularioeliminarComponent } from './formularioeliminar/formularioeliminar.component';
      

    
const routes: Routes = [
  { path: 'grabardatos', component: FormularioagregarComponent },
  { path: 'inicio', component: CuadrocontenidoComponent},
  { path: '', component: CuadrocontenidoComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    CuadrocontenidoComponent,
    FormularioagregarComponent,
    RutinasComponent,
    AtletasComponent,
    FormularioeditarComponent,
    FormularioeliminarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
