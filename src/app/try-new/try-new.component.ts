import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';



@Component({
  selector: 'app-try-new',
  templateUrl: './try-new.component.html',
  styleUrls: ['./try-new.component.css']
})
export class TryNewComponent implements OnInit {
  @Output() featureSelected = new EventEmitter<string>();

  dynamicSlides = [
    {
     heading: 'Most Loved By Parents',
    data:[{
      id: 1,
      src:'../assets/img/banner-ad/bc_img_01.jpg',
      alt:'Side 1',
      title:'What we learn from cooking together with children',
    },
    {
      id: 2,
      src:'../assets/img/banner-ad/bc_img_02.jpg',
      alt:'Side 2',
      title:'What we learn from cooking together with children'
    },
    {
      id: 3,
      src:'../assets/img/banner-ad/bc_img_03.jpg',
      alt:'Side 3',
      title:'What we learn from cooking together with children'
    },
    {
      id: 4,
      src:'../assets/img/banner-ad/bc_img_01.jpg',
      alt:'Side 4',
      title:'What we learn from cooking together with children'
    },
    {
      id: 5,
      src:'../assets/img/banner-ad/bc_img_02.jpg',
      alt:'Side 5',
      title:'What we learn from cooking together with children'
    },
    {
      id: 6,
      src:'../assets/img/banner-ad/bc_img_03.jpg',
      alt:'Side 6',
      title:'What we learn from cooking together with children'
    }]
     
},
  {
    heading: 'Editor’s Picks This Week',
    data:[ {
      id: 1,
      src:'../assets/img/banner-ad/bc_img_01.jpg',
      alt:'Side 1',
      title:'What we learn from cooking together with children'
    },
    {
      id: 2,
      src:'../assets/img/banner-ad/bc_img_02.jpg',
      alt:'Side 2',
      title:'What we learn from cooking together with children'
    },
    {
      id: 3,
      src:'../assets/img/banner-ad/bc_img_03.jpg',
      alt:'Side 3',
      title:'What we learn from cooking together with children'
    },
    {
      id: 4,
      src:'../assets/img/banner-ad/bc_img_01.jpg',
      alt:'Side 4',
      title:'What we learn from cooking together with children'
    },
    {
      id: 5,
      src:'../assets/img/banner-ad/bc_img_02.jpg',
      alt:'Side 5',
      title:'What we learn from cooking together with children'
    },
    {
      id: 6,
      src:'../assets/img/banner-ad/bc_img_03.jpg',
      alt:'Side 6',
      title:'What we learn from cooking together with children'
    }]
     
  },
   
  {
    heading: 'Try Something New in 2021',
    data:[ {
      id: 1,
      src:'../assets/img/banner-ad/bc_img_01.jpg',
      alt:'Side 1',
      title:'What we learn from cooking together with children'
    },
    {
      id: 2,
      src:'../assets/img/banner-ad/bc_img_02.jpg',
      alt:'Side 2',
      title:'What we learn from cooking together with children'
    },
    {
      id: 3,
      src:'../assets/img/banner-ad/bc_img_03.jpg',
      alt:'Side 3',
      title:'What we learn from cooking together with children'
    },
    {
      id: 4,
      src:'../assets/img/banner-ad/bc_img_01.jpg',
      alt:'Side 4',
      title:'What we learn from cooking together with children'
    },
    {
      id: 5,
      src:'../assets/img/banner-ad/bc_img_02.jpg',
      alt:'Side 5',
      title:'What we learn from cooking together with children'
    },
    {
      id: 6,
      src:'../assets/img/banner-ad/bc_img_03.jpg',
      alt:'Side 6',
      title:'What we learn from cooking together with children'
    }]
  }
];

  constructor() { 
  
  }
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

 toToggleEventpage(value:any){
   this.featureSelected.emit();
 }
}
