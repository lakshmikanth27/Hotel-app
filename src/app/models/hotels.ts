export interface Location {
  address: string;
  coordinates: number[];
}

export interface Room {
  type: string;
  number: number;
  description: string;
  photos: string[];
  price: number;
  startDate: string;
  lastDate: string;
  guest: number;
}
export interface Review {
  name: string;
  id: string;
  review: string;
  rating: number;
}

export class Hotel {
  public id: number;
  public stars: number;
  public name: string;
  public description: string;
  public currency: string;
  public photos: string[];
  public services: string[];
  public rooms: Room[];
  public reviews: Review[];
  public location: Location;
  public phone: string;

  constructor(
    id: number,
    stars: number,
    name: string,
    description: string,
    currency: string,
    photos: string[],
    services: string[],
    rooms: Room[],
    reviews: Review[],
    location: Location,
    phone: string
  ) {
    this.id = id;
    this.stars = stars;
    this.name = name;
    this.description = description;
    this.currency = currency;
    this.photos = photos;
    this.services = services;
    this.rooms = rooms;
    this.reviews = reviews;
    this.location = location;
    this.phone = phone;
  }

  public static createBlank(): Hotel {
    return new Hotel(
      -1,
      0,
      "",
      "",
      "",
      [],
      [],
      [
        {
          type: "",
          number: 0,
          description: "",
          photos: [],
          price: 0,
          startDate: "",
          lastDate: "",
          guest: 0
        }
      ],
      [],
      {
        address: "",
        coordinates: []
      },
      "+1 212-764-5500"
    );
  }

  public static createObjeFromJson(obj): Hotel{
    return new Hotel(
      obj.id,
      obj.stars,
      obj.name,
      obj.description,
      obj.currency,
      obj.photos,
      obj.services,
      obj.rooms,
      obj.reviews,
      obj.location,
      obj.phone
    );
  }
}
