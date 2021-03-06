import { Injectable } from "@angular/core";
import { Hotel } from "../models/hotels";
const hotels: Hotel[] = [
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
  },
  {
    id: 3,
    name: "Hotel Dann Carlton Belfort Medellin",
    stars: 5,
    phone: "+1 212-764-5500",
    description:
      "Boasting a panoramic hot tub and a swimming pool surrounded with vegetation and sun loungers, this stylish hotel offers gym facilities and free Wi-Fi. Massage sessions are available.\nHotel Dann Carlton Belfort Medellin is set in a residential area 15 blocks from El Poblado Subway station and 2.7 km from Pies Descalzos Park. Car rental can be arranged.\nAir-conditioned rooms are styled with carpeted floors, draped curtains and elegant wooden furniture. They have flat-screen cable TVs and bathrooms with baths. The suite features a dining area and the junior suites offers views of Medellin.\nA full buffet breakfast with fruits, juices and chocolate is served daily. Guests can enjoy Italian cuisine at Orvietto Restaurant.\nJose Maria Cordoba International Airport is a 45-minute drive. On-site parking is free.\nEl Poblado is a great choice for travellers interested in nightlife, food and business.",
    photos: [
      "/photos/hotel/corinthiahotelbudapest/1.jpg",
      "/photos/hotel/corinthiahotelbudapest/2.jpg",
      "/photos/hotel/corinthiahotelbudapest/3.jpg"
    ],
    currency: "COP",
    rooms: [
      {
        startDate: "03-15-2019",
        lastDate: "03-19-2019",
        guest: 40,
        type: "Standard Single Room",
        number: 50,
        description: "These are small rooms",
        photos: [
          "/photos/room/hoteldanncarltonbelfortmedellin/2.jpg",
          "/photos/room/hoteldanncarltonbelfortmedellin/5.jpg"
        ],
        price: 100
      },
      {
        startDate: "03-15-2019",
        lastDate: "03-19-2019",
        guest: 40,
        type: "Standard Double Room",
        number: 30,
        description: "These are double rooms",
        photos: [
          "/photos/room/hoteldanncarltonbelfortmedellin/4.jpg",
          "/photos/room/hoteldanncarltonbelfortmedellin/6.jpg"
        ],
        price: 12000
      },
      {
        startDate: "03-15-2019",
        lastDate: "03-19-2019",
        guest: 40,
        type: "Suite",
        number: 10,
        description: "Amazing double rooms",
        photos: ["/photos/room/hoteldanncarltonbelfortmedellin/7.jpg"],
        price: 25000
      }
    ],
    location: {
      address: "Calle 17 No 40B - 300, El Poblado, 0501 Medellín, Colombia",
      coordinates: [6.219278, -75.568575]
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
      "Car hire",
      "Airport shuttle (surcharge)",
      "24-hour front desk",
      "Express check-in/check-out",
      "Currency exchange",
      "Tour desk",
      "Luggage storage",
      "Concierge service",
      "Laundry",
      "Dry cleaning",
      "Ironing service",
      "Meeting/banquet facilities",
      "Business centre",
      "Fax/photocopying"
    ]
  },
  {
    id: 4,
    name: "Hotel Karin",
    stars: 3,
    phone: "+1 212-764-5500",
    description:
      "The newly opened, small and charming Karin hotel is situated in the green belt of Budapest, 10 km north of the city centre, and offers excellent public transport links and free parking.\nAir-conditioned and nicely furnished en-suite double rooms with balconies and apartments provide for a peaceful night's rest. In the pleasant restaurant you can start every morning at the rich complimentary breakfast buffet.\nWireless internet access is available in the entire hotel free of charge.\n04. Újpest is a great choice for travellers interested in zoo, monuments and city trip.",
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
        type: "Double or Twin Room",
        number: 10,
        description: "These are small rooms",
        photos: [
          "/photos/room/hotelkarin/2.jpg",
          "/photos/room/hotelkarin/5.jpg"
        ],
        price: 350
      },
      {
        startDate: "03-15-2019",
        lastDate: "03-19-2019",
        guest: 40,
        type: "Apartment (2 Adults)",
        number: 15,
        description: "These are amazing apartmants",
        photos: [
          "/photos/room/hotelkarin/4.jpg",
          "/photos/room/hotelkarin/6.jpg"
        ],
        price: 47500
      }
    ],
    location: {
      address: "1047 Budapest, Foti ut 75, Hungary",
      coordinates: [47.577586, 19.092553]
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
      "Tour desk",
      "Ticket service",
      "Luggage storage",
      "Laundry",
      "Ironing service",
      "Fax/photocopying"
    ]
  },
  {
    id: 5,
    name: "Hotel Quirinale",
    stars: 4,
    phone: "+1 212-764-5500",
    description:
      "Set in a 19th-century building, the Quirinale is 10 minutes' walk from the Coliseum. This historic hotel is connected to Rome Opera House through a passageway in its leafy courtyard. Rooms come with free Wi-Fi.\nHotel Quirinale's spacious rooms are uniquely decorated and feature classic furnishings and parquet floors. Each room offers a flat-screen TV with satellite and pay-per-view channels. Some rooms overlook the small garden and courtyard.\nThe hotel's continental breakfast can be enjoyed outdoors in fine weather. There is also an à la carte restaurant, and the hotel's Opera Bistrot is open all afternoon for more informal meals.\nThe Quirinale is located 200 metres from Repubblica Metro Station. The Spanish Steps and the Trevi Fountain are both within a 15-minute walk, while Vatican City can be reached by car in 10 minutes.\nCentral Station is a great choice for travellers interested in monuments, architecture and ancient landmarks.",
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
        type: "Small Double or Twin Room",
        number: 10,
        description: "These are small rooms",
        photos: [
          "/photos/room/hotelquirinale/2.jpg",
          "/photos/room/hotelquirinale/5.jpg"
        ],
        price: 420.5
      },
      {
        startDate: "03-15-2019",
        lastDate: "03-19-2019",
        guest: 40,
        type: "Standard Double or Twin Room",
        number: 25,
        description: "These are double rooms",
        photos: [
          "/photos/room/hotelquirinale/4.jpg",
          "/photos/room/hotelquirinale/6.jpg"
        ],
        price: 475
      },
      {
        startDate: "03-15-2019",
        lastDate: "03-19-2019",
        guest: 40,
        type: "Superior Double or Twin Room",
        number: 3,
        description: "Amazing suites",
        photos: ["/photos/room/hotelquirinale/7.jpg"],
        price: 560.5
      },
      {
        startDate: "03-15-2019",
        lastDate: "03-19-2019",
        guest: 40,
        type: "Executive Double or Twin Room",
        number: 13,
        description: "Amazing suites",
        photos: ["/photos/room/hotelquirinale/7.jpg"],
        price: 10.5
      },
      {
        startDate: "03-15-2019",
        lastDate: "03-19-2019",
        guest: 40,
        type: "Suite",
        number: 13,
        description: "Very exclusive suites",
        photos: ["/photos/room/hotelquirinale/7.jpg"],
        price: 1300
      }
    ],
    location: {
      address: "Via Nazionale 7, Central Station, 00184 Rome, Italy",
      coordinates: [41.901707, 12.494887]
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
      "Car hire",
      "24-hour front desk",
      "Currency exchange",
      "Tour desk",
      "Ticket service",
      "Luggage storage",
      "Babysitting/child services",
      "Laundry",
      "Dry cleaning",
      "Ironing service",
      "Meeting/banquet facilities",
      "Business centre",
      "Fax/photocopying"
    ]
  },
  {
    id: 6,
    name: "Hotel Raphael – Relais & Châteaux",
    stars: 5,
    phone: "+1 212-764-5500",
    description:
      "One street from Piazza Navona, Hotel Raphael offers luxurious rooms with marble bathroom and parquet floors. Its roof terrace boasts panoramic views of Rome, from St. Peter's to the Pantheon.\nAll air-conditioned rooms come with flat-screen satellite TV and free wired internet. Each elegant bathroom features a bathrobe, slippers, and courtesy set by Bulgari. Some rooms were designed by architect Richard Meier and include an entertainment system by Bose.\nThe 5-star Hotel Raphael – Relais & Châteaux serves an abundant buffet breakfast every morning. Guests can dine at the La Madre Terra restaurant or, weather permitting, at La Terrazza Bramante on the roof terrace.\nThe Raphael Hotel is well connected by buses and most of Rome's historic attractions are just a short walk away. You can reach the Pantheon in 5 minutes on foot, while Castel Sant'Angelo is only 700 metres away.\nNavona is a great choice for travellers interested in food, culture and shopping.",
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
          "/photos/room/hotelraphaelrelaischateaux/2.jpg",
          "/photos/room/hotelraphaelrelaischateaux/5.jpg"
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
          "/photos/room/hotelraphaelrelaischateaux/4.jpg",
          "/photos/room/hotelraphaelrelaischateaux/6.jpg"
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
        photos: ["/photos/room/hotelraphaelrelaischateaux/7.jpg"],
        price: 352.5
      },
      {
        startDate: "03-15-2019",
        lastDate: "03-19-2019",
        guest: 40,
        type: "Standard Plus Triple Room",
        number: 13,
        description: "Amazing suites",
        photos: ["/photos/room/hotelraphaelrelaischateaux/7.jpg"],
        price: 452.5
      },
      {
        startDate: "03-15-2019",
        lastDate: "03-19-2019",
        guest: 40,
        type: "Junior Suite",
        number: 13,
        description: "Very exclusive suites",
        photos: ["/photos/room/hotelraphaelrelaischateaux/7.jpg"],
        price: 1400
      }
    ],
    location: {
      address: "Largo Febo 2, Navona, 00186 Rome, Italy",
      coordinates: [41.896601, 12.47532]
    },
    reviews: [
      {
        name: "",
        id: "/user/tamas.json",
        review: "Great hotel",
        rating: 4
      }
    ],
    services: [
      "Room service",
      "Car hire",
      "24-hour front desk",
      "Express check-in/check-out",
      "Currency exchange",
      "Tour desk",
      "Ticket service",
      "Luggage storage",
      "Concierge service",
      "Babysitting/child services",
      "Laundry",
      "Dry cleaning",
      "Ironing service",
      "Shoeshine",
      "Meeting/banquet facilities",
      "Business centre",
      "Fax/photocopying",
      "VIP room facilities",
      "Bridal suite"
    ]
  },
  {
    id: 7,
    name: "Kempinski Hotel Corvinus Budapest",
    stars: 5,
    phone: "+1 212-764-5500",
    description:
      "Situated 700 metres from the Chain Bridge and Saint Stephen's Basilica, Kempinski Hotel Corvinus Budapest offers several restaurants, luxurious air-conditioned rooms, and an indoor pool. Its architecture is a symbol of modern Budapest.\nThe elegant non-smoking rooms at Hotel Kempinski Corvinus are all equipped with cable TV and free WiFi. They either feature views of the park, the city, or the Fashion Street.\nThe Nobu Restaurant serves delicious sushi and innovative Japanese dishes, while the ÉS Bisztró-Brasserie features a summer terrace and serves Hungarian and Viennese specialities. The Living Room is a classic coffeeshop with a modern twist. Drinks can be enjoyed at Blue Fox The Bar.\nKempinski The Spa, on second floor provides unique massages and body treatments with natural products. At no surcharge, guests can enjoy the sauna and the fitness centre.\nFrom the nearby underground and bus stops, guests can easily access all attractions. The Hungexpo Exhibition Centre is a 20-minute drive away.\n05. Belváros - Lipótváros is a great choice for travellers interested in shopping, history and food.",
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
        type: "Corvinus Suite Collection",
        number: 100,
        description: "These are some great suites",
        photos: [
          "/photos/room/kempinskihotelcorvinusbudapest/2.jpg",
          "/photos/room/kempinskihotelcorvinusbudapest/5.jpg"
        ],
        price: 750
      },
      {
        startDate: "03-15-2019",
        lastDate: "03-19-2019",
        guest: 40,
        type: "Grand Deluxe Double Room",
        number: 150,
        description: "These are amazing apartmants",
        photos: [
          "/photos/room/kempinskihotelcorvinusbudapest/4.jpg",
          "/photos/room/kempinskihotelcorvinusbudapest/6.jpg"
        ],
        price: 890
      },
      {
        startDate: "03-15-2019",
        lastDate: "03-19-2019",
        guest: 40,
        type: "Parlor Suite",
        number: 25,
        description: "These are amazing apartmants",
        photos: [
          "/photos/room/kempinskihotelcorvinusbudapest/4.jpg",
          "/photos/room/kempinskihotelcorvinusbudapest/6.jpg"
        ],
        price: 1120
      }
    ],
    location: {
      address: "1051 Budapest, Erzsébet tér 7-8., Hungary",
      coordinates: [47.497362, 19.052305]
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
      "Packed lunches",
      "Car hire",
      "Shuttle service (surcharge)",
      "Airport shuttle (surcharge)",
      "24-hour front desk",
      "Express check-in/check-out",
      "Currency exchange",
      "Tour desk",
      "Ticket service",
      "Luggage storage",
      "Concierge service",
      "Babysitting/child services",
      "Laundry",
      "Dry cleaning",
      "Ironing service",
      "Shoeshine",
      "Trouser press",
      "Daily maid service",
      "Meeting/banquet facilities",
      "Business centre",
      "Gift shop",
      "VIP room facilities"
    ]
  },
  {
    id: 8,
    name: "New York Marriott Marquis",
    stars: 4,
    phone: "+1 212-764-5500",
    description:
      "Located in the heart of Times Square and the Broadway theater district, this 4-star hotel features 3 dining options, including a revolving rooftop restaurant.\nThe luxurious rooms at the New York Marriott Marquis have a spacious seating area, an LCD TV with satellite channels and a stylish marble bathroom with a range of amenities. Select rooms offer a panoramic view of New York city.\nGuests can enjoy continental cuisine at the popular revolving rooftop View Restaurant & Lounge, or have American cuisine at Crossroads American Kitchen & Bar. Alternatively, the Broadway Lounge offers cocktails and light refreshments on the hotel's 8th floor, with views overlooking Times Square. The lobby on this floor has free Wi-Fi.\nThe Marriott Marquis also features a 4,0 square-foot fitness center, which also overlooks Times Square.\nThe New York Marriott is just minutes from Fifth Avenue shops.",
    photos: [
      "/photos/hotel/corinthiahotelbudapest/1.jpg",
      "/photos/hotel/corinthiahotelbudapest/2.jpg",
      "/photos/hotel/corinthiahotelbudapest/3.jpg"
    ],
    currency: "$",
    rooms: [
      {
        startDate: "03-15-2019",
        lastDate: "03-19-2019",
        guest: 40,
        type: "King Room with Sofa Bed",
        number: 24,
        description: "These are small rooms",
        photos: [
          "/photos/room/newyorkmarriottmarquis/2.jpg",
          "/photos/room/newyorkmarriottmarquis/5.jpg"
        ],
        price: 290
      },
      {
        startDate: "03-15-2019",
        lastDate: "03-19-2019",
        guest: 40,
        type: "Executive Corner King Room with Sofa Bed",
        number: 14,
        description: "These are double rooms",
        photos: [
          "/photos/room/newyorkmarriottmarquis/4.jpg",
          "/photos/room/newyorkmarriottmarquis/6.jpg"
        ],
        price: 410
      },
      {
        startDate: "03-15-2019",
        lastDate: "03-19-2019",
        guest: 40,
        type: "Presidential King Suite",
        number: 14,
        description: "Amazing double rooms",
        photos: ["/photos/room/newyorkmarriottmarquis/7.jpg"],
        price: 1800
      }
    ],
    location: {
      address: "1535 Broadway, New York, NY 10036, USA",
      coordinates: [40.75858, -73.986254]
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
      "Vending machine (drinks)",
      "Vending machine (snacks)",
      "24-hour front desk",
      "Express check-in/check-out",
      "Currency exchange",
      "Tour desk",
      "Ticket service",
      "Luggage storage",
      "ATM/cash machine on site",
      "Concierge service",
      "Laundry",
      "Dry cleaning",
      "Shoeshine",
      "Meeting/banquet facilities",
      "Business centre",
      "Gift shop"
    ]
  },
  {
    id: 9,
    name: "Park Lane Hotel on Central Park",
    stars: 5,
    phone: "+1 212-764-5500",
    description:
      "Park Lane Hotel is a deluxe hotel with a European ambiance, providing views over Central Park and the New York skyline. It is only 2 minutes’ walk from the elegant shops of 5th Avenue and the 59th Street N,Q,R underground station.\nSpacious and bright, rooms at Park Lane Hotel are fitted with oversized windows and fine linens. Amenities include flat-screen TVs and access to the on-site fitness centre.\nEnjoy a seasonal menu created by Jeff Cristelli at The Park Room Restaurant, or select from a wide variety of cocktails at Harry's New York Bar.\nNew York’s Museum of Modern Art, Radio City Music Hall, and Rockefeller Center, are all within 10 minutes' walk. With the park directly in front of the hotel, jogging and recreational activities are easily accessible.",
    photos: [
      "/photos/hotel/corinthiahotelbudapest/1.jpg",
      "/photos/hotel/corinthiahotelbudapest/2.jpg",
      "/photos/hotel/corinthiahotelbudapest/3.jpg"
    ],
    currency: "$",
    rooms: [
      {
        startDate: "03-15-2019",
        lastDate: "03-19-2019",
        guest: 40,
        type: "Executive Queen Room with City View",
        number: 24,
        description: "These are small rooms",
        photos: [
          "/photos/room/parklanehoteloncentralpark/2.jpg",
          "/photos/room/parklanehoteloncentralpark/5.jpg"
        ],
        price: 350
      },
      {
        startDate: "03-15-2019",
        lastDate: "03-19-2019",
        guest: 40,
        type: "Executive King Room with Park View",
        number: 14,
        description: "These are double rooms",
        photos: [
          "/photos/room/parklanehoteloncentralpark/4.jpg",
          "/photos/room/parklanehoteloncentralpark/6.jpg"
        ],
        price: 410
      },
      {
        startDate: "03-15-2019",
        lastDate: "03-19-2019",
        guest: 40,
        type: "Executive Junior Suite with Park View",
        number: 14,
        description: "Amazing double rooms",
        photos: ["/photos/room/parklanehoteloncentralpark/7.jpg"],
        price: 420
      },
      {
        startDate: "03-15-2019",
        lastDate: "03-19-2019",
        guest: 40,
        type: "Premier Room with Partial Park View",
        number: 5,
        description: "Superior double room with external view",
        photos: ["/photos/room/parklanehoteloncentralpark/7.jpg"],
        price: 550
      }
    ],
    location: {
      address: "36 Central Park South, New York, NY 10019, USA",
      coordinates: [40.76482, -73.975335]
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
      "24-hour front desk",
      "Tour desk",
      "Luggage storage",
      "Concierge service",
      "Laundry",
      "Dry cleaning",
      "Ironing service",
      "Meeting/banquet facilities",
      "Business centre",
      "Fax/photocopying"
    ]
  },
  {
    id: 10,
    name: "Park Plaza Westminster Bridge London",
    stars: 4,
    phone: "+1 212-764-5500",
    description:
      "Park Plaza Westminster Bridge London is set opposite the Houses of Parliament and Big Ben, on the South Bank. It is close to the London Eye, the Aquarium, restaurants and theatres.\nThe large, contemporary air-conditioned rooms have modern luxuries, including a flat-screen TV, large desk, mini-bar, fridge and safe. Studios and apartments are also available.\nPark Plaza Westminster Bridge is by the River Thames, 500 metres from The London Eye and London Waterloo Station. Westminster Tube Station is just a short walk away.\nWestminster Bridge Park Plaza features the modern, award-winning Brasserie Joel, Ichi Sushi & Sashami, while the 1WB Lounge & Patisserie offers traditional afternoon tea. Primo Bar offers evening entertainment every night.\nThere is a fully equipped 24-hour gym, a 15-metre swimming pool with a sauna and steam room, and the recently opened Mandara Spa, offering a range of luxury treatments.\nLambeth is a great choice for travellers interested in history, monuments and sightseeing.",
    photos: [
      "/photos/hotel/corinthiahotelbudapest/1.jpg",
      "/photos/hotel/corinthiahotelbudapest/2.jpg",
      "/photos/hotel/corinthiahotelbudapest/3.jpg"
    ],
    currency: "£",
    rooms: [
      {
        startDate: "03-15-2019",
        lastDate: "03-19-2019",
        guest: 40,
        type: "One-Bedroom Apartment",
        number: 24,
        description: "These are small rooms",
        photos: [
          "/photos/room/parkplazawestminsterbridgelondon/2.jpg",
          "/photos/room/parkplazawestminsterbridgelondon/5.jpg"
        ],
        price: 99
      },
      {
        startDate: "03-15-2019",
        lastDate: "03-19-2019",
        guest: 40,
        type: "Superior Double Room with Internal View",
        number: 14,
        description: "These are double rooms",
        photos: [
          "/photos/room/parkplazawestminsterbridgelondon/4.jpg",
          "/photos/room/parkplazawestminsterbridgelondon/6.jpg"
        ],
        price: 119
      },
      {
        startDate: "03-15-2019",
        lastDate: "03-19-2019",
        guest: 40,
        type: "Superior Twin Room with Internal View",
        number: 14,
        description: "Amazing double rooms",
        photos: ["/photos/room/parkplazawestminsterbridgelondon/7.jpg"],
        price: 129.5
      },
      {
        startDate: "03-15-2019",
        lastDate: "03-19-2019",
        guest: 40,
        type: "Superior Double Room",
        number: 5,
        description: "Superior double room with external view",
        photos: ["/photos/room/parkplazawestminsterbridgelondon/7.jpg"],
        price: 159
      }
    ],
    location: {
      address:
        "Westminster Bridge Road, Lambeth, London, SE1 7UT, United Kingdom",
      coordinates: [51.500596, -0.116775]
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
      "Car hire",
      "24-hour front desk",
      "Express check-in/check-out",
      "Currency exchange",
      "Ticket service",
      "Luggage storage",
      "ATM/cash machine on site",
      "Concierge service",
      "Laundry",
      "Dry cleaning",
      "Ironing service",
      "Shoeshine",
      "Meeting/banquet facilities",
      "Business centre",
      "Fax/photocopying",
      "VIP room facilities",
      "Bridal suite"
    ]
  },
  {
    id: 11,
    name: "The Cumberland - A Guoman Hotel",
    stars: 4,
    phone: "+1 212-764-5500",
    description:
      "This stylish 4-star hotel is in the West End, 100 metres from Marble Arch London Underground Station. It boasts modern, luxury rooms and a Michelin-starred restaurant.\nThe Cumberland - A Guoman Hotel is just opposite Hyde Park and Marble Arch. The famous shops of Oxford Street are only 100 metres away.\nAll luxury rooms at The Cumberland Hotel offer flat-screen TVs, Egyptian cotton bed linen, and power showers with toiletries. Some rooms also feature views over Hyde Park or Marble Arch.\nFilled with original sculptures, paintings and artworks, The Cumberland Hotel includes a gym and 3 bars.\nThere is 24-hour room service and a 24-hour concierge service.\nWestminster is a great choice for travellers interested in shopping, theatre and monuments.",
    photos: [
      "/photos/hotel/corinthiahotelbudapest/1.jpg",
      "/photos/hotel/corinthiahotelbudapest/2.jpg",
      "/photos/hotel/corinthiahotelbudapest/3.jpg"
    ],
    currency: "£",
    rooms: [
      {
        startDate: "03-15-2019",
        lastDate: "03-19-2019",
        guest: 40,
        type: "Deluxe King Room",
        number: 24,
        description: "These are small rooms",
        photos: [
          "/photos/room/thecumberlandaguomanhotel/2.jpg",
          "/photos/room/thecumberlandaguomanhotel/5.jpg"
        ],
        price: 145
      },
      {
        startDate: "03-15-2019",
        lastDate: "03-19-2019",
        guest: 40,
        type: "Executive Twin Room",
        number: 14,
        description: "These are double rooms",
        photos: [
          "/photos/room/thecumberlandaguomanhotel/4.jpg",
          "/photos/room/thecumberlandaguomanhotel/6.jpg"
        ],
        price: 169
      },
      {
        startDate: "03-15-2019",
        lastDate: "03-19-2019",
        guest: 40,
        type: "Executive King Room",
        number: 3,
        description: "Amazing king rooms",
        photos: ["/photos/room/thecumberlandaguomanhotel/7.jpg"],
        price: 189.5
      }
    ],
    location: {
      address:
        "Great Cumberland Place, Westminster, London, W1H 7DL, United Kingdom",
      coordinates: [51.513916, -0.159231]
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
      "24-hour front desk",
      "Luggage storage",
      "Concierge service",
      "Laundry",
      "Dry cleaning",
      "Ironing service",
      "Meeting/banquet facilities",
      "Business centre",
      "Fax/photocopying"
    ]
  },
  {
    id: 12,
    name: "Thistle Marble Arch",
    stars: 4,
    phone: "+1 212-764-5500",
    description:
      "Superbly situated, Thistle Marble Arch overlooks Oxford Street and Marble Arch, a 10-minute taxi ride away from Paddington Train Station and its fast link to Heathrow Airport. Marble Arch Tube Station and Hyde Park are just 2 minutes' walk away.\nAll comfortable and spacious rooms have an LCD Freeview flat-screen TV, rain shower and umlimited free WiFi. Air conditioning and a Nespresso coffee machine are also provided.\nThistle Marble Arch also has an impressive range of business facilities, including 12 meeting spaces catering from between 4 and 500 people, business centre, on-hand audio/visual team and gym facilities.\nThe on-site restaurant serves a variety of dishes including steaks, all made with locally sourced ingredients. The bar has a relaxed lounge style and offers craft beers and cocktails, while the deli serves an array of fresh sandwiches, snacks and drinks.\nThe financial district is only 10 minutes away via the underground and Selfridges is just a 5-minute walk away.\nWestminster is a great choice for travellers interested in shopping, theatre and monuments.",
    photos: [
      "/photos/hotel/corinthiahotelbudapest/1.jpg",
      "/photos/hotel/corinthiahotelbudapest/2.jpg",
      "/photos/hotel/corinthiahotelbudapest/3.jpg"
    ],
    currency: "£",
    rooms: [
      {
        startDate: "03-15-2019",
        lastDate: "03-19-2019",
        guest: 40,
        type: "Executive King Room",
        number: 24,
        description: "These are small rooms",
        photos: [
          "/photos/room/thistlemarblearch/2.jpg",
          "/photos/room/thistlemarblearch/5.jpg"
        ],
        price: 145
      },
      {
        startDate: "03-15-2019",
        lastDate: "03-19-2019",
        guest: 40,
        type: "Executive Twin Room",
        number: 14,
        description: "These are double rooms",
        photos: [
          "/photos/room/thistlemarblearch/4.jpg",
          "/photos/room/thistlemarblearch/6.jpg"
        ],
        price: 169
      },
      {
        startDate: "03-15-2019",
        lastDate: "03-19-2019",
        guest: 40,
        type: "Executive Double Room",
        number: 3,
        description: "Amazing double rooms",
        photos: ["/photos/room/thistlemarblearch/7.jpg"],
        price: 189.5
      }
    ],
    location: {
      address:
        "Bryanston Street, Marble Arch, Westminster, London, W1H 7EH, United Kingdom",
      coordinates: [51.514286, -0.156577]
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
      "24-hour front desk",
      "Currency exchange",
      "Luggage storage",
      "Concierge service",
      "Laundry",
      "Dry cleaning",
      "Ironing service",
      "Trouser press",
      "Meeting/banquet facilities",
      "Business centre",
      "Fax/photocopying",
      "Gift shop",
      "VIP room facilities"
    ]
  }
];

const services = [
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
  "Gift shop",
  "VIP room facilities",
  "Car hire",
  "Express check-in/check-out",
  "Babysitting/child services",
  "Shoeshine",
  "Bridal suite",
  "Packed lunches",
  "Shuttle service (surcharge)",
  "Trouser press",
  "Daily maid service",
  "Vending machine (drinks)",
  "Vending machine (snacks)",
  "ATM/cash machine on site"
];

const room_types = [
  "Superior Double or Twin Room",
  "Deluxe Double Room",
  "Executive Double Room",
  "Deluxe Residence",
  "Standard Plus Double Room",
  "Superior Double Room",
  "Standard Plus Triple Room",
  "Junior Suite",
  "Standard Single Room",
  "Standard Double Room",
  "Suite",
  "Double or Twin Room",
  "Apartment (2 Adults)",
  "Small Double or Twin Room",
  "Standard Double or Twin Room",
  "Executive Double or Twin Room",
  "Corvinus Suite Collection",
  "Grand Deluxe Double Room",
  "Parlor Suite",
  "King Room with Sofa Bed",
  "Executive Corner King Room with Sofa Bed",
  "Presidential King Suite",
  "Executive Queen Room with City View",
  "Executive King Room with Park View",
  "Executive Junior Suite with Park View",
  "Premier Room with Partial Park View",
  "One-Bedroom Apartment",
  "Superior Double Room with Internal View",
  "Superior Twin Room with Internal View",
  "Deluxe King Room",
  "Executive Twin Room",
  "Executive King Room"
];

@Injectable({
  providedIn: "root"
})
export class HotelsService {
  hotels: Hotel[];
  services: string[];
  room_types: string[];

  constructor() {
    this.hotels = hotels;
    this.services = services;
    this.room_types = room_types;
  }

  getHotelsList() {
    return this.hotels;
  }

  getServicesList() {
    return this.services;
  }

  getRoomsList() {
    return this.room_types;
  }

  getHotelById(id) {
    return new Promise(resolve => {
      const hotel = this.hotels.find(h => h.id == id);
      resolve(hotel);
    });
  }

  addHotel(hotelData) {
    return new Promise((resolve, reject) => {
      const hotelCount = this.hotels.length;
      hotelData["id"] = hotelCount + 1;
      this.hotels.unshift(hotelData);
      resolve(hotelCount);
    });
  }

  updateHotel(id, hotelData) {
    return new Promise((resolve, reject) => {
      const updatedHotels = this.hotels.map(h => {
        if (h.id == id) {
          return hotelData;
        }
        return h;
      });
      this.hotels = updatedHotels;
      resolve(id);
    });
  }

  deleteHotel(id) {
    const updatedHotels = this.hotels.filter(h => h.id != id);
    this.hotels = updatedHotels;
  }
}
