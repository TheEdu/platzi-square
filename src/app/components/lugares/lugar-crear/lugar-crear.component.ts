import { Component } from '@angular/core';
import { LugaresService } from '../../../services/lugar.service';

@Component({
  selector: 'app-lugar-crear',
  templateUrl: './lugar-crear.component.html',
  styleUrls: ['./lugar-crear.component.css']
})
export class LugarCrearComponent {
  place: any = {};
  closenessTypes: any[] = [];

  constructor( private lugaresService: LugaresService ) {
    this.closenessTypes = this.lugaresService.getClosenessTypes();
  }

  onSubmit() {
    
    const direccion = `${this.place.street},${this.place.city},${this.place.country}`;
    this.lugaresService.obtenerGeoData(direccion)
                       .subscribe((result: any) => {
                          let resultJson =  result.results;
                          this.place.lat =  resultJson.length > 0 ? +resultJson[0].geometry.location.lat : 51.678418;
                          this.place.lng =  resultJson.length > 0 ? +resultJson[0].geometry.location.lng : 7.809007;
                          console.log(resultJson, this.place.lat, this.place.lng);
                          this.lugaresService.guardarLugar(this.place)
                          alert('Negocio guardado con éxito!');
                          this.place = {};
                        });
  }
}
