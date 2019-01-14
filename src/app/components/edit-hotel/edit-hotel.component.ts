import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators, FormArray } from "@angular/forms";
import { ActivatedRoute, ParamMap, Router } from "@angular/router";
import { HotelsService } from "../../services/hotels.service";
import { Hotel } from "../../models/hotels";

@Component({
  selector: "app-edit-hotel",
  templateUrl: "./edit-hotel.component.html",
  styleUrls: ["./edit-hotel.component.css"]
})
export class EditHotelComponent implements OnInit {
  hotels: Array<any>;
  hotel_in_progress: Hotel;
  room_type: string[];
  services: string[];
  hotelForm: FormGroup;
  editFlow: Boolean;
  hotel_id: string;

  constructor(
    private route: ActivatedRoute,
    private _hotelService: HotelsService,
    private router: Router
  ) {
    this.services = this._hotelService.getServicesList();
    this.room_type = this._hotelService.getRoomsList();
    this.hotel_in_progress = Hotel.createBlank();
    this.buildFormGroup();
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const hotel_id = params.get("hotel_id");
      if (hotel_id) {
        this.hotel_id = hotel_id;
        this._hotelService.getHotelById(hotel_id).then(data => {
          this.hotel_in_progress = Hotel.createObjeFromJson(data);
          this.editFlow = false;
          this.buildFormGroup();
        });
      } else {
        this.editFlow = true;
      }
    });
  }

  buildFormGroup(): void {
    const service_controls = this.services.map(c => {
      if (this.hotel_in_progress.services.indexOf(c) > -1) {
        return new FormControl(true);
      }
      return new FormControl(false);
    });
    const fg = {
      name: new FormControl(this.hotel_in_progress.name, [Validators.required]),
      phone: new FormControl(this.hotel_in_progress.phone, [Validators.required]),
      description: new FormControl(this.hotel_in_progress.description, [
        Validators.required
      ]),
      stars: new FormControl(this.hotel_in_progress.stars, [
        Validators.required,
        Validators.min(1),
        Validators.max(5)
      ]),
      location: new FormControl(this.hotel_in_progress.location.address, [
        Validators.required
      ]),
      services: new FormArray(service_controls)
    };

    for (let i = 0; i < this.hotel_in_progress.rooms.length; i++) {
      fg["type_" + i] = new FormControl(this.hotel_in_progress.rooms[i].type, [
        Validators.required
      ]);
      fg["price_" + i] = new FormControl(
        this.hotel_in_progress.rooms[i].price,
        [Validators.required]
      );
      fg["number_" + i] = new FormControl(
        this.hotel_in_progress.rooms[i].number,
        [Validators.required, Validators.min(1)]
      );
      fg["description_" + i] = new FormControl(
        this.hotel_in_progress.rooms[i].description,
        [Validators.required]
      );
      fg["startDate_" + i] = new FormControl(
        this.hotel_in_progress.rooms[i].startDate,
        [Validators.required]
      );
      fg["lastDate_" + i] = new FormControl(
        this.hotel_in_progress.rooms[i].lastDate,
        [Validators.required]
      );
      fg["guest_" + i] = new FormControl(
        this.hotel_in_progress.rooms[i].guest,
        [Validators.required]
      );
    }

    this.hotelForm = new FormGroup(fg);
  }

  addRoomPressed(): void {
    const now = new Date();
    const format = `${now.getMonth()+1}-${now.getDate()}-${now.getFullYear()}`
      this.hotel_in_progress.rooms.push({
        type: "",
        number: 0,
        description: "",
        photos: [],
        price: 0,
        startDate: format,
        lastDate: format,
        guest: 0,
      });
    this.buildFormGroup();
  }

  addHotelClicked(): void {
    const selectedServices = [];

    for (let i = 0; i < this.services.length; i++) {
      if (this.hotelForm.value.services[i]) {
        selectedServices.push(this.services[i]);
      }
    }
    this.hotel_in_progress.services = selectedServices;
    if (this.editFlow) {
      this._hotelService.addHotel(this.hotel_in_progress).then(id => {
        this.router.navigate(["home"]);
      });
    } else {
      this._hotelService
        .updateHotel(this.hotel_id, this.hotel_in_progress)
        .then(id => {
          this.router.navigate(["home"]);
        });
    }
  }
}
