import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'qidz-project';
  
//   dynamicSlides = [
//     {
//       id: 1,
//       src:'../assets/img/banner-ad/bc_img_01.jpg',
//       alt:'Side 1',
//       title:'Side 1'
//     },
//     {
//       id: 2,
//       src:'../assets/img/banner-ad/bc_img_02.jpg',
//       alt:'Side 2',
//       title:'Side 2'
//     },
//     {
//       id: 3,
//       src:'../assets/img/banner-ad/bc_img_03.jpg',
//       alt:'Side 3',
//       title:'Side 3'
//     },
//     {
//       id: 4,
//       src:'../assets/img/banner-ad/bc_img_01.jpg',
//       alt:'Side 4',
//       title:'Side 4'
//     },
//     {
//       id: 5,
//       src:'../assets/img/banner-ad/bc_img_02.jpg',
//       alt:'Side 4',
//       title:'Side 4'
//     },
//     {
//       id: 6,
//       src:'../assets/img/banner-ad/bc_img_03.jpg',
//       alt:'Side 4',
//       title:'Side 4'
//     }
     
//   ]

//   constructor() { }
//  customOptions: OwlOptions = {
//    loop: true,
//    mouseDrag: false,
//    touchDrag: false,
//    pullDrag: false,
//    dots: false,
//    navSpeed: 600,
//    navText: ['&#8249', '&#8250;'],
//    responsive: {
//      0: {
//        items: 1 
//      },
//      400: {
//        items: 2
//      },
//      760: {
//        items: 3
//      },
//      1000: {
//        items: 4
//      }
//    },
//    nav: true
//  }

homePage:boolean = true;
eventPage:boolean = false;

toEventPage (value: any){
  this.homePage = false;
  this.eventPage = true;
}

toHomePage(value:any){
  this.homePage = true;
  this.eventPage = false;
}

}


     
      



