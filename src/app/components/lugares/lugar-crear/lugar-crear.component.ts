import { Component } from '@angular/core';
import { LugaresService } from '../../../services/lugar.service';

@Component({
  selector: 'app-lugar-crear',
  templateUrl: './lugar-crear.component.html',
  styleUrls: ['./lugar-crear.component.css']
})
export class LugarCrearComponent {
  place: Object = {};
  closenessTypes: Object[] = [];

  constructor( private lugaresService: LugaresService ) {
    this.closenessTypes = this.lugaresService.getClosenessTypes();
  }

  onSubmit(){
    this.lugaresService.guardarLugar(this.place)
  }
}
