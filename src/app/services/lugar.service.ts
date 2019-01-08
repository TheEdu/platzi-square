import { Injectable } from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/database';
import { Place, places, closenessTypes } from './../utils/mocks/places';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class LugaresService {
    places: any[] = places;
    closenessTypes: any[] = closenessTypes;

    constructor(private afDB:AngularFireDatabase, private http: HttpClient){}

    public getLugares() {
        return this.afDB.list('places/').valueChanges();
        // return this.places;
    }

    public getClosenessTypes() {
        return this.closenessTypes;
    }

    public buscarLugar( id ) {
        return this.places.find( p => p.id === +id ) || {};
    }

    public buscarClosenessType( id ) {
        return this.closenessTypes.find( c => c.id === +id ) || {};
    }

    public guardarLugar( place ) {
        const id = +Date.now();
        const p = new Place(
            id,
            place.name,  
            place.description, 
            true, 
            this.buscarClosenessType(place.closeness),
            place.distance, 
            place.plan,
            place.street,
            place.city,
            place.country,
            place.lat,
            place.lng
        );
        console.log(p);
        this.places.push(p);
        this.afDB.database.ref(`places/${p.id}`).set(p);
    }

    public obtenerGeoData(direccion){
        return this.http
        .get('https://maps.googleapis.com/maps/api/geocode/json?address='+ direccion + '&key=AIzaSyBGhvrQh2edYQi7AXdDYCA71Lb_YehPXTk');
    }
}
