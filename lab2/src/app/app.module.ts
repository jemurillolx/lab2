import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { CuadrocontenidoComponent } from './cuadrocontenido/cuadrocontenido.component';
import { FormularioagregarComponent } from './formularioagregar/formularioagregar.component';
import { RutinasComponent } from './rutinas/rutinas.component';
import { FormularioeditarComponent } from './formularioeditar/formularioeditar.component';
import { FormularioeliminarComponent } from './formularioeliminar/formularioeliminar.component';
import { ListadeportistasComponent } from './listadeportistas/listadeportistas.component';
  

const routes: Routes = [
  { path: 'grabardatos', component: FormularioagregarComponent },
  { path: 'inicio', component: CuadrocontenidoComponent},
  { path: 'rutinas', component: RutinasComponent},
  { path: 'crossfiters', component: ListadeportistasComponent},
  { path: '', component: CuadrocontenidoComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    CuadrocontenidoComponent,
    FormularioagregarComponent,
    RutinasComponent,
    FormularioeditarComponent,
    FormularioeliminarComponent,
    ListadeportistasComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
