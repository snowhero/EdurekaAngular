import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assign3',
  templateUrl: './assign3.component.html',
  styleUrls: ['./assign3.component.css']
})
export class Assign3Component implements OnInit {

  constructor() { }
  clickCount = 0;
  displayToggle = false;
  styleToggleOne = true;
  styleToggleTwo = false;

  toggleQuote() {
    this.clickCount++;
    console.log('Button clicked ' + this.clickCount + ' times.');
    this.displayToggle = !this.displayToggle;
    if(this.clickCount % 5 == 0) {
      this.styleToggleOne = !this.styleToggleOne;
      this.styleToggleTwo = !this.styleToggleTwo;
    }
  }

  ngOnInit() {
  }

}
