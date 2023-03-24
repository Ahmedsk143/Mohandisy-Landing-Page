import { Component, Input, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-review-card',
  templateUrl: './review-card.component.html',
  styleUrls: ['./review-card.component.scss'],
})
export class ReviewCardComponent implements OnInit {
  @Input() para: string = '';
  @Input() name: string = '';
  @Input() location: string = '';
  @Input() imgSrc: string = '';
  constructor() {}

  ngOnInit(): void {}
}
