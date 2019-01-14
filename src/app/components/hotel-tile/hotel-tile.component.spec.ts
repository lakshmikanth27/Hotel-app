import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { HotelsService } from '../../services/hotels.service'
import { HotelTileComponent } from './hotel-tile.component';
import { RoomTileComponent } from '../room-tile/room-tile.component';
import { StarRatingComponent } from '../../shared/star-rating/star-rating.component';

const hotel = {
  id: 1,
  name: "Corinthia Hotel Budapest",
  stars: 5,
  phone: "+1 212-764-5500",
  description:
    "The 5-star Corinthia Hotel Budapest on the Grand Boulevard offers free access to its Royal Spa, 3 restaurants, an elegant café and free Wi-Fi in all rooms.\nThe UNESCO-protected Andrassy Avenue and the Oktogon metro station are only 300 metres away from the Corinthia Hotel Budapest.\nIn the newly opened Royal Spa you can enjoy several relaxation areas, saunas, steam baths, hot tubs, a fitness room, mud baths, seaweed baths and a wide variety of treatments.\nThe large guest rooms of the Corinthia Hotel Budapest are all air-conditioned and feature a flat-screen TV with satellite channels.\nGourmet Hungarian, Asian and international cuisine can be enjoyed in the restaurants and you can choose from a selection of home-made cakes in the café. Throughout the day you can listen to live piano music in the lobby bar.\n07. Erzsébetváros is a great choice for travellers interested in nightlife, culture and hot springs.",
  photos: [
    "/photos/hotel/corinthiahotelbudapest/1.jpg",
    "/photos/hotel/corinthiahotelbudapest/2.jpg",
    "/photos/hotel/corinthiahotelbudapest/3.jpg"
  ],
  currency: "HUF",
  rooms: [
    {
      startDate: "03-15-2019",
      lastDate: "03-19-2019",
      guest: 40,
      type: "Superior Double or Twin Room",
      number: 20,
      description: "These are some great rooms",
      photos: [
        "/photos/hotel/corinthiahotelbudapest/1.jpg",
        "/photos/hotel/corinthiahotelbudapest/2.jpg",
        "/photos/hotel/corinthiahotelbudapest/3.jpg"
      ],
      price: 730
    },
    {
      startDate: "03-15-2019",
      lastDate: "03-19-2019",
      guest: 40,
      type: "Deluxe Double Room",
      number: 50,
      description: "These are amazing rooms",
      photos: [
        "/photos/hotel/corinthiahotelbudapest/1.jpg",
        "/photos/hotel/corinthiahotelbudapest/2.jpg",
        "/photos/hotel/corinthiahotelbudapest/3.jpg"
      ],
      price: 920
    },
    {
      startDate: "03-15-2019",
      lastDate: "03-19-2019",
      guest: 40,
      type: "Executive Double Room",
      number: 25,
      description: "These are amazing rooms",
      photos: [
        "/photos/hotel/corinthiahotelbudapest/1.jpg",
        "/photos/hotel/corinthiahotelbudapest/2.jpg",
        "/photos/hotel/corinthiahotelbudapest/3.jpg"
      ],
      price: 1120
    },
    {
      startDate: "03-15-2019",
      lastDate: "03-19-2019",
      guest: 40,
      type: "Deluxe Residence",
      number: 15,
      description: "Excellent for three people",
      photos: [
        "/photos/hotel/corinthiahotelbudapest/1.jpg",
        "/photos/hotel/corinthiahotelbudapest/2.jpg",
        "/photos/hotel/corinthiahotelbudapest/3.jpg"
      ],
      price: 1200
    }
  ],
  location: {
    address: "1073 Budapest, Erzsébet körút 43-49., Hungary",
    coordinates: [47.502649, 19.066785]
  },
  reviews: [
    {
      name: "Tamas",
      id: "/user/tamas.json",
      review: "Great hotel",
      rating: 4
    }
  ],
  services: [
    "Room service",
    "Airport shuttle (surcharge)",
    "24-hour front desk",
    "Currency exchange",
    "Tour desk",
    "Ticket service",
    "Luggage storage",
    "Concierge service",
    "Laundry",
    "Dry cleaning",
    "Ironing service",
    "Meeting/banquet facilities",
    "Business centre",
    "Fax/photocopying",
    "Barber/beauty shop",
    "Gift shop"
  ]
}
describe('HotelTileComponent', () => {
  let component: HotelTileComponent;
  let fixture: ComponentFixture<HotelTileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotelTileComponent, RoomTileComponent, StarRatingComponent ],
      imports: [RouterTestingModule.withRoutes([])],
      providers:[HotelsService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelTileComponent);
    component = fixture.componentInstance;
    component.hotel = hotel
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
