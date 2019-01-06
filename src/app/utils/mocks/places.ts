class Place {
    id: number;
    name: string;
    active: boolean;
    closeness: object;
    distance: number;
    visits: number;
    plan: string;
    constructor(id: number, name: string, active: boolean = true, closeness: object, distance: number = 1, plan: string = 'sin pagar') {
        this.id = id;
        this.name = name;
        this.active = active;
        this.closeness = closeness;
        this.distance = distance;
        this.plan = plan;
        this.visits = 0;
    }
}

const closenessTypes = [
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

const places = [
  new Place(1, 'A',  true, closenessTypes[0], 1, 'pagado'),
  new Place(2, 'B',  true, closenessTypes[0], 2.5),
  new Place(3, 'C', false, closenessTypes[1], 7.8, 'pagado'),
  new Place(4, 'D',  true, closenessTypes[1], 9.2),
  new Place(5, 'E',  true, closenessTypes[2], 123, 'pagado'),
  new Place(6, 'F', false, closenessTypes[2], 97)
];

export default places;
