import { Component, OnInit, Input } from '@angular/core';
import { start } from 'repl';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.css']
})
export class StarRatingComponent implements OnInit {
  @Input() stars;

  constructor() {
  }

  ngOnInit() { }

}
