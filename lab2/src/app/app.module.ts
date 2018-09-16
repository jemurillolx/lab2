import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { CuadrocontenidoComponent } from './cuadrocontenido/cuadrocontenido.component';

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    CuadrocontenidoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
