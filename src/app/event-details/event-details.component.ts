import { ThisReceiver } from '@angular/compiler';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {
@Output() homePageFeature = new EventEmitter<any>();
  constructor() { }
  
  ngOnInit(): void {
    //throw new Error('Method not implemented.');
  }

  
  homePage : boolean;
  eventPage : boolean;
 
  tohomePage(value: any) {
    this.homePage = value.homePage;
   this.eventPage = value.eventPage;
  }

  toTogglehomepage(value:any){
    this.homePageFeature.emit( {homePage:this.homePage,eventPage:this.eventPage} );
  }
}
