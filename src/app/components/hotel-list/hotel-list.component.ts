import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { HotelsService } from '../../services/hotels.service'
import { Hotel } from '../../models/hotels'
@Component({
  selector: "app-hotel-list",
  templateUrl: "./hotel-list.component.html"
})
export class HotelListComponent {
  hotels: Hotel[];
  rawHotelList: Hotel[];

  constructor(private router: Router, private hotel_service: HotelsService) {
    this.getHotelData()
  }

  public getHotelData(){
    this.hotels = this.hotel_service.getHotelsList();
    this.rawHotelList = this.hotels;
    const services = [];
    this.hotels.map(h=>{
        h.rooms.map(s=>{
          if(services.indexOf(s.type) === -1){
            services.push(s.type)
          }
        })
    })

    console.log(services)
  }

  public handleSearch(searchTerm: string) {
    this.hotels = this.rawHotelList.filter(u => u.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
  }

  handleDeleteHotel(id){
    this.hotel_service.deleteHotel(id);
    this.getHotelData();
  }
}
