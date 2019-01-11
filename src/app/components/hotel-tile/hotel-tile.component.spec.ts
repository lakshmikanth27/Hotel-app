import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelTileComponent } from './hotel-tile.component';

describe('HotelTileComponent', () => {
  let component: HotelTileComponent;
  let fixture: ComponentFixture<HotelTileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotelTileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
