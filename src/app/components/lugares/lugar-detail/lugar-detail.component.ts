import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import places from '../../../utils/mocks/places';
import { LugaresService } from '../../../services/lugar.service';

@Component({
  selector: 'app-lugar-detail',
  templateUrl: './lugar-detail.component.html',
  styleUrls: ['./lugar-detail.component.css']
})
export class LugarDetailComponent {
  detailId: number;
  place: Object = {};

  constructor(private route: ActivatedRoute, private lugaresService: LugaresService) {
    const action = this.route.snapshot.queryParams['action']; // forma de pasar valores por el Query String
    const detailId = this.route.snapshot.params['id']; // forma de pasar parametros por la url

    this.detailId = detailId;
    this.place = lugaresService.buscarLugar(detailId);
    console.log(action, detailId, this.place);
  }
}
