import { Component, OnInit, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-vertical-tabs',
  templateUrl: './vertical-tabs.component.html',
  styleUrls: ['./vertical-tabs.component.scss'],
})
export class VerticalTabsComponent implements OnInit {
  @Input() sProviders: {
    name: string;
    logo: string;
    genre: string;
    location: string;
  }[] = [];
  isActiveItem: string = 'tab1';
  constructor() {}

  ngOnInit(): void {
    this.loadTab1();
  }
  loadTab1() {
    this.isActiveItem = 'tab1';
    this.sProviders = [
      {
        name: 'شركة إعمار للتشييد والبناء',
        logo: '../../../../assets/spLogo-1.png',
        genre: 'إستشارات هندسية, تصميم داخلى',
        location: 'السعودية, الرياض',
      },
      {
        name: 'شركة إعمار للتشييد والبناء',
        logo: '../../../../assets/spLogo-1.png',
        genre: 'إستشارات هندسية, تصميم داخلى',
        location: 'السعودية, الرياض',
      },
      {
        name: 'شركة إعمار للتشييد والبناء',
        logo: '../../../../assets/spLogo-1.png',
        genre: 'إستشارات هندسية, تصميم داخلى',
        location: 'السعودية, الرياض',
      },
      {
        name: 'شركة إعمار للتشييد والبناء',
        logo: '../../../../assets/spLogo-1.png',
        genre: 'إستشارات هندسية, تصميم داخلى',
        location: 'السعودية, الرياض',
      },
      {
        name: 'شركة إعمار للتشييد والبناء',
        logo: '../../../../assets/spLogo-1.png',
        genre: 'إستشارات هندسية, تصميم داخلى',
        location: 'السعودية, الرياض',
      },
      {
        name: 'شركة إعمار للتشييد والبناء',
        logo: '../../../../assets/spLogo-1.png',
        genre: 'إستشارات هندسية, تصميم داخلى',
        location: 'السعودية, الرياض',
      },
    ];
  }
  loadTab2() {
    this.isActiveItem = 'tab2';

    this.sProviders = [
      {
        name: 'شركة إعمار للتشييد والبناءaaaaa',
        logo: '../../../../assets/spLogo-1.png',
        genre: 'إستشارات هندسية, تصميم داخلى',
        location: 'السعودية, الرياض',
      },
      {
        name: 'شركة إعمار للتشييد والبناء',
        logo: '../../../../assets/spLogo-1.png',
        genre: 'إستشارات هندسية, تصميم داخلى',
        location: 'السعودية, الرياض',
      },
      {
        name: 'شركة إعمار للتشييد والبناء',
        logo: '../../../../assets/spLogo-1.png',
        genre: 'إستشارات هندسية, تصميم داخلى',
        location: 'السعودية, الرياض',
      },
    ];
  }
  loadTab3() {
    this.isActiveItem = 'tab3';

    this.sProviders = [
      {
        name: 'شركة إعمار للتشييد والبناءsssss',
        logo: '../../../../assets/spLogo-1.png',
        genre: 'إستشارات هندسية, تصميم داخلى',
        location: 'السعودية, الرياض',
      },
      {
        name: 'شركة إعمار للتشييد والبناء',
        logo: '../../../../assets/spLogo-1.png',
        genre: 'إستشارات هندسية, تصميم داخلى',
        location: 'السعودية, الرياض',
      },
      {
        name: 'شركة إعمار للتشييد والبناء',
        logo: '../../../../assets/spLogo-1.png',
        genre: 'إستشارات هندسية, تصميم داخلى',
        location: 'السعودية, الرياض',
      },
    ];
  }
}
