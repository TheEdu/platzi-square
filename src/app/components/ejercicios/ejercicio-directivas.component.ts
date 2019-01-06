import { Component } from '@angular/core';
import places from './../../utils/mocks/places';

class Person {
    firstName: string;
    lastName: string;
    age: number;
    active: boolean;
    constructor(firstName: string, lastName: string, age: number, active: boolean = true) {
        this.firstName = firstName;
        this.lastName  = lastName;
        this.age  = age;
        this.active = active;
    }
    greet() {
        return `Hola ${this.firstName} ${this.lastName}`;
    }
}

const person = new Person('Eduardo', 'Denis', 26);

@Component({
  selector: 'app-ejercicio-directivas',
  templateUrl: './ejercicio-directivas.component.html',
  styleUrls: ['./ejercicio-directivas.component.css']
})
export class EjercicioDirectivasComponent {
  ready = false;
  person: Person = person;
  places: Object[] = places;

  constructor() {
    setTimeout(() => {
      this.ready = true;
    }, 3000);
  }

  doSomething() {
    alert(this.person.greet());
  }
}
