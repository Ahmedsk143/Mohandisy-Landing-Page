import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
})
export class ServicesComponent implements OnInit {
  @Input() hasMoreLink: boolean = true;

  @Input() services: {
    heading: string;
    para: string;
    img: string;
  }[] = [];
  constructor() {}

  ngOnInit(): void {}
}
