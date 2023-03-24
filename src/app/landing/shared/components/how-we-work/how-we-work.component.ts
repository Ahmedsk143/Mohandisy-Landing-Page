import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-how-we-work',
  templateUrl: './how-we-work.component.html',
  styleUrls: ['./how-we-work.component.scss'],
})
export class HowWeWorkComponent implements OnInit {
  steps = [
    {
      title: 'إبحث عن مزود الخدمة',
      para: 'إبحث في قائمة مزودى الخدمات واعثر على الحساب الأنسب لمشروعك وتصفح أعمالهم السابقة أو منتجاتهم.',
      img: '../../../assets/icons/select.png',
    },
    {
      title: 'قم بتعبئة النموذج',
      para: 'عند العثور على الشركة المناسبة إختر طلب تسعيرة وقم بتعبئة نموذج الخدمة الإنشائية المطلوبة مع إرفاق كافة المستندات.',
      img: '../../../assets/icons/checklist.png',
    },
    {
      title: 'إنتظر قبول الطلب',
      para: 'عند استقبال الشركة للطلب ستقوم بمراجعته وتقييمه, سيتم قبوله أو رفضه مع إعلامك بذلك عن طريق رسالة بريد إلكترونى.',
      img: '../../../assets/icons/team.png',
    },
    {
      title: 'تواصل لاستكمال الطلب',
      para: 'عند قبول الطلب ستفتح نافذة محادثة للتواصل لاستكمال الطلب وتسليم التسعيرة.',
      img: '../../../assets/icons/contact.png',
    },
    {
      title: 'تواصل لاستكمال الطلب',
      para: 'عند قبول الطلب ستفتح نافذة محادثة للتواصل لاستكمال الطلب وتسليم التسعيرة.',
      img: '../../../assets/icons/contact.png',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
