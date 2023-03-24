import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-service-card',
  templateUrl: './service-card.component.html',
  styleUrls: ['./service-card.component.scss'],
})
export class ServiceCardComponent implements OnInit {
  @Input() heading: string = '';
  @Input() para: string = '';
  @Input() img: string = '';
  constructor() {}

  ngOnInit(): void {}
}
