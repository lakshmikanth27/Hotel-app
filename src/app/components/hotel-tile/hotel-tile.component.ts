import { Component, Input, Output,EventEmitter } from '@angular/core';
import {Router } from "@angular/router";
import {HotelsService} from '../../services/hotels.service'

@Component({
  selector: 'app-hotel-tile',
  templateUrl: './hotel-tile.component.html',
  styleUrls: ['./hotel-tile.component.css']
})
export class HotelTileComponent {

  @Input() hotel

  @Output() hotelDelete: EventEmitter<number> = new EventEmitter();

  constructor(private router: Router, private _hotelService: HotelsService) { }

  generateStars(num){
    const starArr = [];
    for(let i=0; i<num; i++){
      starArr.push(i);
    }
    return starArr;
  }

  editClick(){
    this.router.navigateByUrl('/editHotel/' + this.hotel.id);
  }

  deleteClick(){
    this.hotelDelete.emit(this.hotel.id);
  }
}
