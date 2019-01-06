import { Component } from '@angular/core';

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

class Place {
  name: string;
  active: boolean;
  closeness: object;
  distance: number;
  visits: number;
  plan: string;
  constructor(name: string, active: boolean = true, closeness: object, distance: number = 1, plan: string = 'sin pagar') {
      this.name = name;
      this.active = active;
      this.closeness = closeness;
      this.distance = distance;
      this.plan = plan;
      this.visits = 0;
  }
}

const closenessTypes = [
{
  id: 1,
  text: 'Muy Cercano'
},
{
  id: 2,
  text: 'Cercano'
},
{
  id: 3,
  text: 'Legajo'
}
];

const places = [
new Place('A',  true, closenessTypes[0], 1, 'pagado'),
new Place('B',  true, closenessTypes[0], 2.5),
new Place('C', false, closenessTypes[1], 7.8, 'pagado'),
new Place('D',  true, closenessTypes[1], 9.2),
new Place('E',  true, closenessTypes[2], 123, 'pagado'),
new Place('F', false, closenessTypes[2], 97)
];

const person = new Person('Eduardo', 'Denis', 26);

@Component({
  selector: 'app-ejercicio-directivas',
  templateUrl: './ejercicio-directivas.component.html',
  styleUrls: ['./ejercicio-directivas.component.css']
})
export class EjercicioDirectivasComponent {
  ready = false;
  person: Person = person;
  places: Place[] = places;

  constructor() {
    setTimeout(() => {
      this.ready = true;
    }, 3000);
  }

  doSomething() {
    alert(this.person.greet());
  }
}
