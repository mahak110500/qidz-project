import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-get-inspiration',
  templateUrl: './get-inspiration.component.html',
  styleUrls: ['./get-inspiration.component.css']

})
export class GetInspirationComponent implements OnInit {

  bgcolor(id) {
    if (id == '3') { return '#66c2ff'; }
    if (id == '4') { return '#ff3333'; }
    if (id == '2') { return '#9999ff'; }
  }

  dynamicSlides = [
    {
      id: 1,
      src: '../assets/img/banner-ad/event_cat_01.jpg',
      alt: 'Side 1',
      title: 'Best deals in town'
    },
    {
      id: 2,
      src: '../assets/img/banner-ad/event_cat_02.png',
      alt: 'Side 2',
      title: 'Editor Picks'
    },
    {
      id: 3,
      src: '../assets/img/banner-ad/event_cat_03.png',
      alt: 'Side 3',
      title: 'Try Something New in 2021'
    },
    {
      id: 4,
      src: '../assets/img/banner-ad/event_cat_04.png',
      alt: 'Side 4',
      title: 'Free Fun This Month'
    },
    {
      id: 5,
      src: '../assets/img/banner-ad/event_cat_01.jpg',
      alt: 'Side 4',
      title: 'Side 4'
    },
    {
      id: 6,
      src: '../assets/img/banner-ad/event_cat_02.png',
      alt: 'Side 4',
      title: 'Side 4'
    }

  ]

  constructor() { }
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 600,
    navText: ['&#8249', '&#8250;'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      760: {
        items: 3
      },
      1000: {
        items: 4
      }
    },
    nav: true
  }

}
