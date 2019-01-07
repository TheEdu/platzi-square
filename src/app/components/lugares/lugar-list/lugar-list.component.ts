import { Component } from '@angular/core';
import { LugaresService } from '../../../services/lugar.service';

@Component({
  selector: 'app-lugar-list',
  templateUrl: './lugar-list.component.html',
  styleUrls: ['./lugar-list.component.css']
})
export class LugarListComponent {
  title = 'Platzi Square';
  places: any[];
  lat = 51.678418;
  lng = 7.809007;

  constructor( private lugaresService: LugaresService ) {
    this.places = lugaresService.getLugares()
                                .map((place, index) => {
                                  place.visits = Math.floor(Math.random() * 100);
                                  return place;
                                });
  }
}
