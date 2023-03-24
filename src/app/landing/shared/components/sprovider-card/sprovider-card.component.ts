import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sprovider-card',
  templateUrl: './sprovider-card.component.html',
  styleUrls: ['./sprovider-card.component.scss'],
})
export class SproviderCardComponent implements OnInit {
  @Input() cover: string = '';
  @Input() logo: string = '';
  @Input() label: string = '';
  @Input() name: string = '';
  @Input() para: string = '';
  @Input() location: string = '';
  @Input() genre: string = '';
  @Input() industry: string = '';
  @Input() navigateTo: string = '';
  constructor() {}

  ngOnInit(): void {}
}
