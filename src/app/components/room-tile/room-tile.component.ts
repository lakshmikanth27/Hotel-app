import { Component, OnInit, Input } from '@angular/core';
import {Room} from '../../models/hotels'
@Component({
  selector: 'app-room-tile',
  templateUrl: './room-tile.component.html',
  styleUrls: ['./room-tile.component.css']
})
export class RoomTileComponent implements OnInit {

  @Input() room: Room
  constructor() { }

  ngOnInit() {
  }

  getTimeStamp(date){
    return new Date(date);
  }
}
