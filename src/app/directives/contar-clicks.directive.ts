import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appContarClicks]'
})
export class ContarClicksDirective {

  constructor() { }

  numberOfClicks = 0;
  @HostBinding('style.opacity') opacity = .5;

  @HostListener('click', ['$event.target'])
  onClick(btn) {
    console.log('button', btn, 'number of clicks:', this.numberOfClicks++);
    console.log(this.opacity);
    this.opacity =  this.opacity >= 1.0 ? .6 : this.opacity + .1;
  }

}
