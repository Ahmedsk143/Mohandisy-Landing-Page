import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-user-reviews',
  templateUrl: './user-reviews.component.html',
  styleUrls: ['./user-reviews.component.scss'],
})
export class UserReviewsComponent implements OnInit {
  reviews: {
    id: string;
    para: string;
    name: string;
    location: string;
    img: string;
  }[] = [];
  constructor() {}

  ngOnInit(): void {
    this.reviews = [
      {
        id: '1',
        para: 'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.',
        name: 'أنس عبدالله',
        location: 'الإمارات العربية المتحدة',
        img: '../../../../assets/Avatar.png',
      },
      {
        id: '2',
        para: 'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.',
        name: 'سعود بن احمد',
        location: 'الإمارات العربية المتحدة',
        img: '../../../../assets/Avatar1.png',
      },
      {
        id: '3',
        para: 'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.',
        name: 'راشد العلي',
        location: 'الإمارات العربية المتحدة',
        img: '../../../../assets/Avatar2.png',
      },
      {
        id: '2',
        para: 'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.',
        name: 'علي بن عبدالله',
        location: 'الإمارات العربية المتحدة',
        img: '../../../../assets/Avatar1.png',
      },
    ];
  }
  customOptions: OwlOptions = {
    loop: true,
    rtl: true,
    autoplay: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    margin: 20,
    nav: true,
    navText: [
      "<img src='../../../../assets/icons/arrow-circle-right.png' width='40px' class='slide-arrow'>",
      "<img src='../../../../assets/icons/arrow-circle-left.png' width='40px' class=' '> ",
    ],
    responsive: {
      0: {
        items: 1,
        margin: 180,
      },
      400: {
        items: 1,
      },
      740: {
        items: 3,
      },
      1140: {
        items: 3,
      },
    },
    dots: false,
  };
}
