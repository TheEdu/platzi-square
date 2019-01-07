import { Injectable } from '@angular/core';
import places from './../utils/mocks/places';

@Injectable()
export class LugaresService {
    places: any[] = places;

    public getLugares() {
        return this.places;
    }

    public buscarLugar( id ) {
        return this.places.find( p => p.id === +id ) || {};
    }
    public guardarLugar( place ) {
        console.log(place);
        place.id = +Date.now();
        this.places.push(place);
    }
}
