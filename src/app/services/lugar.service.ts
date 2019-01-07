import { Injectable } from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/database';
import { Place, places, closenessTypes } from './../utils/mocks/places';

@Injectable()
export class LugaresService {
    places: any[] = places;
    closenessTypes: any[] = closenessTypes;

    constructor(private afDB:AngularFireDatabase){}

    public getLugares() {
        return this.places;
    }

    public getClosenessTypes() {
        return this.closenessTypes;
    }

    public buscarLugar( id ) {
        return this.places.find( p => p.id === +id ) || {};
    }
    public guardarLugar( place ) {
        const id = +Date.now();
        const p = new Place(
            id, 
            place.name,  
            place.description, 
            true, 
            closenessTypes[0],
            place.distance, 
            place.plan
        );
        console.log(p);
        this.places.push(p);
        this.afDB.database.ref('places/1').set(p);
    }
}
