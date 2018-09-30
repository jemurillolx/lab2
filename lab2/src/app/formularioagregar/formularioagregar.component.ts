import { PersonservicesService } from './../services/personservices.service';
import { Component, OnInit } from '@angular/core';
import { Persona } from './../models/mymain';
import { Deportista } from '../models/deportista';

@Component({
  selector: 'app-formularioagregar',
  templateUrl: './formularioagregar.component.html',
  styleUrls: ['./formularioagregar.component.css']
})
export class FormularioagregarComponent implements OnInit {
  DeportistaArray: Deportista[] = [
    {id: 1, nombre: 'Jorge', pais: 'Guatemala'},
    {id: 2, nombre: 'Emilio', pais: 'Guatemala'}
  ];
  constructor() {
  }
  ngOnInit() {
  }
}
