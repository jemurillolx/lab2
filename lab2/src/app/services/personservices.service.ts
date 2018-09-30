import { Injectable } from '@angular/core';
import { Persona } from '../models/mymain';
@Injectable({
  providedIn: 'root'

})
export class PersonservicesService {
 personas: Persona[];

  constructor() {
    this.personas = [];
   }

   getPersons(): Persona[] {
     if (localStorage.getItem('personas') === null) {
       this.personas = [];
     } else {
       this.personas = JSON.parse(localStorage.getItem('personas'));
     }
     return this.personas;
   }

   addPerson(person: Persona): void {
      this.personas.unshift(person);
      if (localStorage.getItem('personas') === null) {
        this.personas = [];
        this.personas.unshift(person);
        localStorage.setItem('personas', JSON.stringify(this.personas) );
      } else {
        this.personas = JSON.parse(localStorage.getItem('personas'));
        this.personas.unshift(person);
        localStorage.setItem('personas', JSON.stringify(this.personas) );
      }
   }

   deletePerson(person: Persona) {
     for (let i = 0; i < this.personas.length; i++) {
       if (person === this.personas[i]) {
         this.personas.splice(i, 1);
         localStorage.setItem('personas', JSON.stringify(this.personas) );
       }
     }
    this.personas.unshift(person);
    if (localStorage.getItem('personas') === null) {
      this.personas = [];
      this.personas.unshift(person);
      localStorage.setItem('personas', JSON.stringify(this.personas) );
    } else {
      this.personas = JSON.parse(localStorage.getItem('personas'));
      this.personas.unshift(person);
      localStorage.setItem('personas', JSON.stringify(this.personas) );
    }
 }
}
