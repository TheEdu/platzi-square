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
    constructor(name: string, active: boolean = true, closeness: object, distance: number = 1, plan: string = "sin pagar") {
        this.name = name;
        this.active = active;
        this.closeness = closeness;
        this.distance = distance;
        this.plan = plan;
        this.visits = 0;
    }
}

const closeness = [
  {
    id: 1,
    text: "Muy Cercano"
  }, 
  {
    id: 2,
    text: "Cercano"
  }, 
  {
    id: 3,
    text: "Legajo"
  }
];


const places = [
  new Place('A',  true, closeness[0], 1, "pagado"),
  new Place('B',  true, closeness[0], 2.5),
  new Place('C', false, closeness[1], 7.8, "pagado"),
  new Place('D',  true, closeness[1], 9.2),
  new Place('E',  true, closeness[2], 123, "pagado"),
  new Place('F', false, closeness[2], 97)
]

const person = new Person('Eduardo', 'Denis', 26);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Platzi Square';
  ready = false;
  person: Person = person;
  places: Place[] = places.map((place, index) => {
                          place.visits = Math.floor(Math.random() * 100);
                          return place;
                        });
  lat = 51.678418;
  lng = 7.809007;

  constructor() {
    setTimeout(() => {
      this.ready = true;
    }, 3000);
  }

  doSomething() {
    alert(this.person.greet());
  }
}
