import { Component } from '@angular/core';

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

@Component({
  selector: 'app-lugar-list',
  templateUrl: './lugar-list.component.html',
  styleUrls: ['./lugar-list.component.css']
})
export class LugarListComponent {
  title = 'Platzi Square';
  places: Place[] = places.map((place, index) => {
                          place.visits = Math.floor(Math.random() * 100);
                          return place;
                        });
  lat = 51.678418;
  lng = 7.809007;
}
