import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import places from '../../../utils/mocks/places';

@Component({
  selector: 'app-lugar-detail',
  templateUrl: './lugar-detail.component.html',
  styleUrls: ['./lugar-detail.component.css']
})
export class LugarDetailComponent {
  detailId: number;
  places: Object[] = places;
  place: Object = {};

  constructor(private route: ActivatedRoute) {
    const action = this.route.snapshot.queryParams['action']; // forma de pasar valores por el Query String
    const detailId = this.route.snapshot.params['id']; // forma de pasar parametros por la url
    const place = places.find( p => p.id === +detailId ) || {};
    this.detailId = detailId;
    this.place = place;
    console.log(action, this.place);
  }
}
