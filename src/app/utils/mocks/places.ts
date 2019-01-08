export class Place {
    id: number;
    name: string;
    description: string;
    active: boolean;
    closeness: object;
    distance: number;
    visits: number;
    plan: string;
    street: string;
    city: string;
    country: string;
    lat: number;
    lng: number;

    constructor (
      id: number, 
      name: string, 
      description: string, 
      active: boolean = true, 
      closeness: object, 
      distance: number = 1, 
      plan: string = 'sin pagar',
      street: string = 'sin calle',
      city: string = 'sin ciudad',
      country: string = 'sin country',
      lat: number = 1.0,
      lng: number = 1.0
    ) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.active = active;
        this.closeness = closeness;
        this.distance = distance;
        this.plan = plan;
        this.visits = 0;
        this.street = street,
        this.city = city,
        this.country = country,
        this.lat = lat,
        this.lng = lng
    }
}

export const closenessTypes = [
  {
    id: 1,
    text: 'Muy Cercano'
  },
  {
    id: 2,
    text: 'Cercano'
  },
  {
    id: 3,
    text: 'Legajo'
  }
];

export const places = [
  new Place(1, 'A',  'Desc A', true, closenessTypes[0], 1, 'pagado'),
  new Place(2, 'B',  'Desc B', true, closenessTypes[0], 2.5),
  new Place(3, 'C',  'Desc C', false, closenessTypes[1], 7.8, 'pagado'),
  new Place(4, 'D',  'Desc D', true, closenessTypes[1], 9.2),
  new Place(5, 'E',  'Desc E', true, closenessTypes[2], 123, 'pagado'),
  new Place(6, 'F',  'Desc F', false, closenessTypes[2], 97)
];

// export default {
//   closenessTypes,
//   places
// }