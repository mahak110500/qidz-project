import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-home-section',
  templateUrl: './home-section.component.html',
  styleUrls: ['./home-section.component.css']
})
export class HomeSectionComponent implements OnInit {
  @Output() loadedFeature = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  toToggleHomepage(value:any){
    this.loadedFeature.emit({homePage:true, eventPage:false});
  }
}
