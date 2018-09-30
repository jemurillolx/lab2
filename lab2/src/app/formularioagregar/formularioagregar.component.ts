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
    {id: 1, nombre: 'Jorge', profesion: 'Estudiantes', pais: 'Guatemala', edad: '23', correo: 'luxjorge@gmail.com' }
  ];
  selectedDeportista: Deportista = new Deportista();
  /* */
  constructor() {
    this.selectedDeportista.id = 0;
    localStorage.setItem('miedit', '0');
    if (localStorage.getItem('deportistas') === null) {
      this.DeportistaArray  = [
        {id: 1, nombre: 'Jorge', profesion: 'Estudiantes', pais: 'Guatemala', edad: '23', correo: 'luxjorge@gmail.com' }
      ];
      localStorage.setItem('deportistas', JSON.stringify(this.DeportistaArray) );
      localStorage.setItem('miedit', '0');
    } else {
        this.DeportistaArray = JSON.parse(localStorage.getItem('deportistas'));
        localStorage.setItem('miedit', '0');
    }
  }
  ngOnInit() {
  }
  AddOrEdit() {
  if (localStorage.getItem('deportistas') === null) {
      this.DeportistaArray  = [
        {id: 1, nombre: 'Jorge', profesion: 'Estudiantes', pais: 'Guatemala', edad: '23', correo: 'luxjorge@gmail.com' }
      ];
       /*se agrega al nuevo elemento del arreglo*/
        this.selectedDeportista.id = this.DeportistaArray.length + 1;
        this.DeportistaArray.push(this.selectedDeportista);
      localStorage.setItem('deportistas', JSON.stringify(this.DeportistaArray) );
      localStorage.setItem('miedit', '0');
    }
    if (localStorage.getItem('miedit') !== null && localStorage.getItem('miedit') === '0') {
        this.selectedDeportista.id = this.DeportistaArray.length + 1;
        this.DeportistaArray.push(this.selectedDeportista);
      }
    /*para limpiar los datos */
    this.selectedDeportista = new Deportista();
    this.selectedDeportista.id = 0;
    localStorage.setItem('miedit', '0');
    localStorage.setItem('deportistas', JSON.stringify(this.DeportistaArray) );
  }
  eliminarDeportista() {
      if (confirm('Seguro de borrar al Deportista?') && this.DeportistaArray.length > 0) {
        this.DeportistaArray = this.DeportistaArray.filter(y => y !== this.selectedDeportista);
        this.selectedDeportista = new Deportista();
        this.selectedDeportista.id = 0;
        localStorage.setItem('deportistas', JSON.stringify(this.DeportistaArray));
      }
    localStorage.setItem('miedit', '0');

  }
  opneForEdit(deportista: Deportista) {
    this.selectedDeportista = deportista;
    localStorage.setItem('miedit', '1');
  }
}
