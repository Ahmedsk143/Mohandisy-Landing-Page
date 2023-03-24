import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-horizontal-tabs',
  templateUrl: './horizontal-tabs.component.html',
  styleUrls: ['./horizontal-tabs.component.scss'],
})
export class HorizontalTabsComponent implements OnInit {
  isActiveItem: string = 'tab1';
  prevWorks = [
    {
      img: '../../../../assets/images/home/prevWork-1.png',
      title: 'مصاعد خارجية',
    },
    {
      img: '../../../../assets/images/home/prevWork-2.png',
      title: 'مصاعد بدون حفر',
    },
    {
      img: '../../../../assets/images/home/prevWork-3.png',
      title: 'مصاعد داخلية',
    },
    {
      img: '../../../../assets/images/home/prevWork-4.png',
      title: 'مصاعد جيرليس',
    },
    {
      img: '../../../../assets/images/home/prevWork-3.png',
      title: 'مصاعد داخلية',
    },
    {
      img: '../../../../assets/images/home/prevWork-4.png',
      title: 'مصاعد جيرليس',
    },
    {
      img: '../../../../assets/images/home/prevWork-1.png',
      title: 'مصاعد خارجية',
    },
    {
      img: '../../../../assets/images/home/prevWork-2.png',
      title: 'مصاعد بدون حفر',
    },
  ];
  reviews = [
    {
      id: '1',
      para: 'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.',
      name: 'أنس عبدالله',
      location: 'الإمارات العربية المتحدة',
      img: '../../../../assets/images/home/Avatar.png',
    },
    {
      id: '2',
      para: 'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.',
      name: 'سعود بن احمد',
      location: 'الإمارات العربية المتحدة',
      img: '../../../../assets/images/home/Avatar1.png',
    },

    {
      id: '3',
      para: 'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.',
      name: 'راشد العلي',
      location: 'الإمارات العربية المتحدة',
      img: '../../../../assets/images/home/Avatar2.png',
    },
    {
      id: '4',
      para: 'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.',
      name: 'علي بن عبدالله',
      location: 'الإمارات العربية المتحدة',
      img: '../../../../assets/images/home/Avatar1.png',
    },
    {
      id: '5',
      para: 'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.',
      name: 'راشد العلي',
      location: 'الإمارات العربية المتحدة',
      img: '../../../../assets/images/home/Avatar2.png',
    },
    {
      id: '6',
      para: 'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.',
      name: 'أنس عبدالله',
      location: 'الإمارات العربية المتحدة',
      img: '../../../../assets/images/home/Avatar.png',
    },
  ];
  constructor() {}

  ngOnInit(): void {
    this.loadTab1();
  }
  loadTab1() {
    this.isActiveItem = 'tab1';
  }
  loadTab2() {
    this.isActiveItem = 'tab2';
  }
  loadTab3() {
    this.isActiveItem = 'tab3';
  }
}
