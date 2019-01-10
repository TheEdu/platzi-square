import { Component } from '@angular/core';
import { LugaresService } from '../../../services/lugar.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/debounceTime';
import { FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-lugar-crear',
  templateUrl: './lugar-crear.component.html',
  styleUrls: ['./lugar-crear.component.css']
})
export class LugarCrearComponent {
  place: any = {};
  closenessTypes: any[] = [];
  results$: Observable<any>;
  private searchField: FormControl;

  constructor (
      private lugaresService: LugaresService,
      private route: ActivatedRoute,
      private http: HttpClient
    ) {
    this.closenessTypes = this.lugaresService.getClosenessTypes();
    const placeId = this.route.snapshot.params['id'] || null;
    if (placeId) {
      this.lugaresService.buscarLugar( placeId )
                         .subscribe((place: any) => {
                            this.place = place;
                            this.place.closeness = place.closeness.id;
                         });
    }

    const URL = 'https://maps.google.com/maps/api/geocode/json?key=AIzaSyBGhvrQh2edYQi7AXdDYCA71Lb_YehPXTk';
    this.searchField = new FormControl();
    this.results$ = this.searchField
                        .valueChanges
                        .debounceTime(500)
                        .switchMap(query => this.http.get(`${URL}&address=${query}`))
                        .map((response: any) => {
                          const list = response.results.length === 0 ? ['1', '2', '3'] : response.results;
                          console.log(list);
                          return list;
                        });
                        // .map(response => response.json())
                        // .map(response => {
                        //   console.log(response.results);
                        //   return response.results;
                        // });
  }

  onSubmit() {
    if (!this.place.id) {
      const direccion = `${this.place.street},${this.place.city},${this.place.country}`;
      this.lugaresService.obtenerGeoData(direccion)
                         .subscribe((result: any) => {
                            const resultJson =  result.results;
                            this.place.lat =  resultJson.length > 0 ? +resultJson[0].geometry.location.lat : 51.678418;
                            this.place.lng =  resultJson.length > 0 ? +resultJson[0].geometry.location.lng : 7.809007;
                            console.log(resultJson, this.place.lat, this.place.lng);
                            this.lugaresService.guardarLugar(this.place);
                            alert('Negocio guardado con éxito!');
                            this.place = {};
                          });
    } else {
      this.lugaresService.guardarLugar(this.place)
                         .subscribe((result: any) => {
                            alert('Negocio editado con éxito!');
                            this.place = { };
                         });
    }
  }
}
