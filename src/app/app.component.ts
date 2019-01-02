import { Component } from '@angular/core';

class Person {
    firstName: string;
    lastName: string;
    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName  = lastName;
    }
    greet() {
        return `Hola ${this.firstName} ${this.lastName}`;
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

  person: Person = new Person('Eduardo', 'Denis')

  constructor(){
    setTimeout(() => {
      this.ready = true;
    }, 3000)
  }

  doSomething(){
    alert(this.person.greet());
  }
}
