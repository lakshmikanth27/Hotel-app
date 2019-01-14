import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { RoomTileComponent } from "./room-tile.component";

describe("RoomTileComponent", () => {
  const room = {
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
  };
  let component: RoomTileComponent;
  let fixture: ComponentFixture<RoomTileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RoomTileComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomTileComponent);
    component = fixture.componentInstance;
    component.room = room;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
