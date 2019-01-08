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
    }

    public getClosenessTypes() {
        return this.closenessTypes;
    }

    public buscarLugar( id ) {
        return this.afDB.object(`places/${+id}`).valueChanges();
    }

    public buscarClosenessType( id ) {
        return this.closenessTypes.find( c => c.id === +id ) || {};
    }

    public guardarLugar( place ) {
        const id = place.id ? +place.id : +Date.now();
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
        this.places.push(p); // store in memory
        this.afDB.database.ref(`places/${p.id}`).set(p); // store in firebase
        return this.afDB.object(`places/${p.id}`).valueChanges();
    }

    public obtenerGeoData(direccion){
        return this.http
        .get('https://maps.googleapis.com/maps/api/geocode/json?address='+ direccion + '&key=AIzaSyBGhvrQh2edYQi7AXdDYCA71Lb_YehPXTk');
    }
}
