import { Component } from '@angular/core';
import { LugaresService } from '../../../services/lugar.service';
import {trigger, state, style, transition, animate} from "@angular/animations";

@Component({
  selector: 'app-lugar-list',
  templateUrl: './lugar-list.component.html',
  styleUrls: ['./lugar-list.component.css'],
  animations: [
        trigger('contenedorAnimable', [
            state('inicial', style({
                opacity: 0
            })),
            state('final', style({
                opacity: 1
            })),
            transition('inicial => final', animate(2000)),
            transition('final => inicial', animate(1000)),
        ])
    ]
})
export class LugarListComponent {
  title = 'Platzi Square';
  places: any[];
  lat = 51.678418;
  lng = 7.809007;
  zoom = 18;
  state = 'inicial';

  constructor( private lugaresService: LugaresService ) {
    lugaresService.getLugares()
                  .subscribe( places => {
                    this.places = places;
                    this.state = 'final';
                  }, error => {
                      console.log(error);
                      alert('Tenemos algo de dificultades, disculpe las molestias. Error: ' + error.statusText);
                  });
  }
}
