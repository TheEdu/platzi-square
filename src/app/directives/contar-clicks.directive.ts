import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: 'a[appContarClicks]'
})
export class ContarClicksDirective {

  constructor() { }

  numberOfClicks = 0;

  @HostListener('click', ['$event.target'])
  onClick(btn) {
    console.log('button', btn, 'number of clicks:', this.numberOfClicks++);
  }

}
