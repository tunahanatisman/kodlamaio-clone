import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent implements OnInit {
  lessonList!: any[];
  constructor() {}

  ngOnInit(): void {
    this.fillLessonData();
  }
  fillLessonData() {
    this.lessonList = [
      {
        id: 1,
        lessonImg: 'assets/img/lesson1.jpg',
        lessonName: 'Yazılım Geliştirici Yetiştirme Kampı (JavaScript)',
        lessonDescription:
          '1,5 ay sürecek Yazılım Geliştirici Yetiştirme Kampımızın takip, döküman ve duyurularını buradan yapacağız.',
        instructor: 'engin demiroğ',
        instructorProfile: 'assets/img/engin-demirog.jpg',
        price: 'ücretsiz',
      },
      {
        id: 2,
        lessonImg: 'assets/img/lesson2.jpg',
        lessonName: 'Yazılım Geliştirici Yetiştirme Kampı (C# + ANGULAR)',
        lessonDescription:
          '2 ay sürecek Yazılım Geliştirici Yetiştirme Kampımızın takip, döküman ve duyurularını buradan yapacağız.',
        instructor: 'engin demiroğ',
        instructorProfile: 'assets/img/engin-demirog.jpg',
        price: 'ücretsiz',
      },
      {
        id: 3,
        lessonImg: 'assets/img/lesson3.jpg',
        lessonName: 'Yazılım Geliştirici Yetiştirme Kampı (JAVA + REACT)',
        lessonDescription:
          '2 ay sürecek Yazılım Geliştirici Yetiştirme Kampımızın takip, döküman ve duyurularını buradan yapacağız.',
        instructor: 'engin demiroğ',
        instructorProfile: 'assets/img/engin-demirog.jpg',
        price: 'ücretsiz',
      },
    ];
  }
}
