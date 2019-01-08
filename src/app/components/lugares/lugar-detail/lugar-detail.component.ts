import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
    lugaresService.buscarLugar(detailId)
                  .subscribe((place) => {
                    this.place = place;
                    console.log(action, detailId, this.place);
                  });
  }
}
