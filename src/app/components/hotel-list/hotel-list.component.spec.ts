import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import { HotelsService } from '../../services/hotels.service'

import { HotelListComponent } from "./hotel-list.component";
import { HotelTileComponent } from "../hotel-tile/hotel-tile.component";
import { SearchComponent } from "../search/search.component";
import { RoomTileComponent } from "../room-tile/room-tile.component";
import { StarRatingComponent } from "../../shared/star-rating/star-rating.component";

const hotels = [
  {
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
  },
  {
    id: 2,
    name: "Grand Hotel Palatino",
    stars: 4,
    phone: "+1 212-764-5500",
    description:
      "Just a 5-minute walk from the Coliseum and 100 metres from Cavour Metro, Grand Hotel Palatino is in Rome's Monti District. It offers an American bar and 2 restaurants. Wi-Fi is free throughout. Rooms at the Grand Hotel are air conditioned and come with a minibar and satellite TV. Some have views of Rome’s rooftops.\nLe Erbe restaurant offers international cuisine in elegant surroundings, while Le Spighe specialises in Roman dishes and classic Italian cooking. Breakfast starts at 06:30.\nThe Forum and the Parco di Traiano are both less than a 10-minute walk from the hotel. Termini Train Station is one metro stop away, as is Esquilino with its markets and many ethnic restaurants.\nRione Monti is a great choice for travellers interested in sightseeing, food and monuments.",
    photos: [
      "/photos/hotel/corinthiahotelbudapest/1.jpg",
      "/photos/hotel/corinthiahotelbudapest/2.jpg",
      "/photos/hotel/corinthiahotelbudapest/3.jpg"
    ],
    currency: "€",
    rooms: [
      {
        startDate: "03-15-2019",
        lastDate: "03-19-2019",
        guest: 40,
        type: "Standard Plus Double Room",
        number: 10,
        description: "These are small rooms",
        photos: [
          "/photos/room/grandhotelpalatino/2.jpg",
          "/photos/room/grandhotelpalatino/5.jpg"
        ],
        price: 312.5
      },
      {
        startDate: "03-15-2019",
        lastDate: "03-19-2019",
        guest: 40,
        type: "Executive Double Room",
        number: 25,
        description: "These are double rooms",
        photos: [
          "/photos/room/grandhotelpalatino/4.jpg",
          "/photos/room/grandhotelpalatino/6.jpg"
        ],
        price: 322.5
      },
      {
        startDate: "03-15-2019",
        lastDate: "03-19-2019",
        guest: 40,
        type: "Superior Double Room",
        number: 3,
        description: "Amazing suites",
        photos: ["/photos/room/grandhotelpalatino/7.jpg"],
        price: 352.5
      },
      {
        startDate: "03-15-2019",
        lastDate: "03-19-2019",
        guest: 40,
        type: "Standard Plus Triple Room",
        number: 13,
        description: "Amazing suites",
        photos: ["/photos/room/grandhotelpalatino/7.jpg"],
        price: 452.5
      },
      {
        startDate: "03-15-2019",
        lastDate: "03-19-2019",
        guest: 40,
        type: "Junior Suite",
        number: 13,
        description: "Very exclusive suites",
        photos: ["/photos/room/grandhotelpalatino/7.jpg"],
        price: 1400
      }
    ],
    location: {
      address: "Via Cavour 213, Rione Monti, 00184 Rome, Italy",
      coordinates: [41.894493, 12.492259]
    },
    reviews: [
      {
        name: "Tamas",
        id: "/user/tamas.json",
        review: "Great hotel",
        rating: 4
      },
      {
        name: "Steve",
        id: "/user/steve.json",
        review: "Awesome place!",
        rating: 5
      }
    ],
    services: [
      "Room service",
      "Airport shuttle (surcharge)",
      "24-hour front desk",
      "Currency exchange",
      "Tour desk",
      "Luggage storage",
      "Concierge service",
      "Laundry",
      "Dry cleaning",
      "Ironing service",
      "Meeting/banquet facilities",
      "Business centre",
      "VIP room facilities"
    ]
  }
];
describe("HotelListComponent", () => {
  let component: HotelListComponent;
  let fixture: ComponentFixture<HotelListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HotelListComponent,
        HotelTileComponent,
        SearchComponent,
        RoomTileComponent,
        StarRatingComponent
      ],
      imports: [FormsModule,RouterTestingModule.withRoutes([])],
      providers:[HotelsService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelListComponent);
    component = fixture.componentInstance;
    component.hotels = hotels;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
