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
      img: '../../../../assets/images/home/Rectangle 1.png',
    },
    {
      name: 'مجموعة أبراج سكنية',
      location: 'السعودية, مكة المكرمة',
      img: '../../../../assets/images/home/Rectangle 1 (2).png',
    },
    {
      name: 'مجموعة أبراج سكنية',
      location: 'السعودية, مكة المكرمة',
      img: '../../../../assets/images/home/Rectangle 2.png',
    },
    {
      name: 'مجموعة أبراج سكنية',
      location: 'السعودية, مكة المكرمة',
      img: '../../../../assets/images/home/Rectangle 3.png',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
