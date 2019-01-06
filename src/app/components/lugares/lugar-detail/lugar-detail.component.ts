import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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
  selector: 'app-lugar-detail',
  templateUrl: './lugar-detail.component.html',
  styleUrls: ['./lugar-detail.component.css']
})
export class LugarDetailComponent {
  ready = false;
  person: Person = person;

  constructor(private route: ActivatedRoute) {
    console.log(this.route.snapshot.params['id']);
    setTimeout(() => {
      this.ready = true;
    }, 3000);
  }

  doSomething() {
    alert(this.person.greet());
  }
}
