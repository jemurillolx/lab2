import { Component } from '@angular/core';
import { Deportista } from './models/deportista';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  DeportistaArray: Deportista[] = [
    {id: 1, nombre: 'Jorge', pais: 'Guatemala'},
    {id: 2, nombre: 'Emilio', pais: 'Guatemala'}
  ];

}
