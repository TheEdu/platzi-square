import { Component } from '@angular/core';
import places from './../../../utils/mocks/places';

@Component({
  selector: 'app-lugar-list',
  templateUrl: './lugar-list.component.html',
  styleUrls: ['./lugar-list.component.css']
})
export class LugarListComponent {
  title = 'Platzi Square';
  places: Object[] = places.map((place, index) => {
                          place.visits = Math.floor(Math.random() * 100);
                          return place;
                        });
  lat = 51.678418;
  lng = 7.809007;
}
