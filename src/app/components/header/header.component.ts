import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {

  links: Array<Object>

  constructor( private route: Router) {
    this.links = [
      {
        label: 'Add Hotel',
        link: '/addHotel'
      },
      {
        label: 'Hotel Search',
        link: '/home'
      }
    ];
  }
}



