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
    visits: number
    constructor(name: string, active: boolean = true) {
        this.name = name;
        this.active = active;
    }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Platzi Square';
  ready: boolean = false;
  person: Person = new Person('Eduardo', 'Denis', 26);
  list: Place[] = [new Place('A', true), new Place('B', true), new Place('C', true)]
                        .map((place, index) => {
                          place.visits = Math.floor(Math.random() * 100);
                          return place
                        });

  constructor(){
    setTimeout(() => {
      this.ready = true;
    }, 3000)
  }

  doSomething(){
    alert(this.list);
  }
}
