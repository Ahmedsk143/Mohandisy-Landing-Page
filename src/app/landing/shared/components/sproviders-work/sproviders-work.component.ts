import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sproviders-work',
  templateUrl: './sproviders-work.component.html',
  styleUrls: ['./sproviders-work.component.scss'],
})
export class SprovidersWorkComponent implements OnInit {
  spWorks = [
    {
      name: 'مجموعة أبراج سكنية',
      location: 'السعودية, مكة المكرمة',
      img: '../../../../assets/Rectangle 1.png',
    },
    {
      name: 'مجموعة أبراج سكنية',
      location: 'السعودية, مكة المكرمة',
      img: '../../../../assets/Rectangle 1 (2).png',
    },
    {
      name: 'مجموعة أبراج سكنية',
      location: 'السعودية, مكة المكرمة',
      img: '../../../../assets/Rectangle 2.png',
    },
    {
      name: 'مجموعة أبراج سكنية',
      location: 'السعودية, مكة المكرمة',
      img: '../../../../assets/Rectangle 3.png',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
