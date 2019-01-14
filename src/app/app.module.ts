import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HotelListComponent } from './components/hotel-list/hotel-list.component';
import { StarRatingComponent } from './shared/star-rating/star-rating.component';
import { HotelTileComponent } from './components/hotel-tile/hotel-tile.component';
import { SearchComponent } from './components/search/search.component';
import { RoomTileComponent } from './components/room-tile/room-tile.component';
import { EditHotelComponent } from './components/edit-hotel/edit-hotel.component';

const routes: Routes = [
  { path: 'home', component: HotelListComponent },
  { path: 'hotels', component: HotelListComponent },
  { path: 'addHotel', component: EditHotelComponent },
  { path: 'editHotel/:hotel_id', component: EditHotelComponent },
  { path: '', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HotelListComponent,
    StarRatingComponent,
    HotelTileComponent,
    SearchComponent,
    RoomTileComponent,
    EditHotelComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  exports: [StarRatingComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
