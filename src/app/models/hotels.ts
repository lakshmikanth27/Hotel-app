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
}
export interface Review {
  name: string;
  id: string;
  review: string[];
  rating: number;
}

export class Hotel {
  public stars: number;
  public name: string;
  public description: string;
  public currency: string;
  public photos: string[];
  public services: string[];
  public rooms: Room[];
  public reviews: Review[];
  public location: Location[];

  constructor(
    stars: number,
    name: string,
    description: string,
    currency: string,
    photos: string[],
    services: string[],
    rooms: Room[],
    reviews: Review[],
    location: Location[]
  ) {
    this.stars = stars;
    this.name = name;
    this.description = description;
    this.currency = currency;
    this.photos = photos;
    this.services = services;
    this.rooms = rooms;
    this.reviews = reviews;
    this.location = location;
  }
}
