import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent implements OnInit {
  services: {
    heading: string;
    para: string;
    img: string;
  }[] = [];
  constructor() {}

  ngOnInit(): void {
    this.services = [
      {
        heading: 'فض النزاعات',
        para: 'توفر لك هذه الخدمة مجموعة من بيانات المهندسين المعتمدين من الهيئة السعودية لحل النزاعات بمنتهى الشفافية وعدم التحيز لأي طرف من أطراف النزاع.',
        img: '"../../../../assets/images/home/Rectangle 180.png',
      },
      {
        heading: 'تنفيذ إستشارة لمشروع',
        para: 'تقدم هذه الخدمة من أجل تحليل الوضع الحالي للمشاريع وبيان الحلول الممكنة لتحسين جدوى المشروع  وتقدير التكلفة الفنية.',
        img: '"../../../../assets/images/home/Rectangle 172.png',
      },
      {
        heading: 'هندسة الوقاية والحماية',
        para: 'هذه الخدمة تشتمل على  إجراءات التراخيص والموافقات والمتطلبات القانونية أثناء التراخيص في بداية التشغيل  كما تعمل إنهاء المخالفات والمحاضر وعمل المصالحات.',
        img: '"../../../../assets/images/home/Rectangle 178.png',
      },
      {
        heading: 'إصدار رخصة بناء',
        para: 'الان ومن خلال منصة مهندسى تستطيع الحصول  على رخصة البناء وإنهاء جميع التراخيص والموافقات القانونية المطلوبة.',
        img: '"../../../../assets/images/home/Rectangle 170.png',
      },
    ];
  }
}
