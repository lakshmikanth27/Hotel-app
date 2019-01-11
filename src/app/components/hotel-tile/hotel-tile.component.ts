import { Component, Input } from "@angular/core";

@Component({
  selector: "app-hotel-tile",
  templateUrl: "./hotel-tile.component.html",
  styleUrls: ["./hotel-tile.component.css"]
})
export class HotelTileComponent {
  @Input() hotel;

  constructor() {}

  generateStars(num) {
    const starArr = [];
    for (let i = 0; i < num; i++) {
      starArr.push(i);
    }
    return starArr;
  }
}
