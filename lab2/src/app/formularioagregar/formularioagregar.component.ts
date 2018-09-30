import { FormsModule } from '@angular/forms';
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
  selectedDeportista: Deportista = new Deportista();
  /* */
  constructor() {
    this.selectedDeportista.id = 0;
  }
  ngOnInit() {
  }
  AddOrEdit() {
  /* // if (this.selectedDeportista.id === 0  || this.DeportistaArray.length === 0) {*/
      this.selectedDeportista.id = this.DeportistaArray.length + 1;
      this.DeportistaArray.push(this.selectedDeportista);
      /*para limpiar los datos */
    /*////}*/
    this.selectedDeportista = new Deportista();
    this.selectedDeportista.id = 0;
  }
  eliminarDeportista() {
   if (confirm('Seguro de borrar al Deportista?') && this.DeportistaArray.length > 0) {
    this.DeportistaArray = this.DeportistaArray.filter(y => y !== this.selectedDeportista);
    this.selectedDeportista = new Deportista();
    this.selectedDeportista.id = 0;
   }
  }
  opneForEdit(deportista: Deportista) {
    this.selectedDeportista = deportista;
  }
}
