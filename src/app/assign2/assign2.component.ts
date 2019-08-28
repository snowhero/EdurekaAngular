import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assign2',
  templateUrl: './assign2.component.html',
  styleUrls: ['./assign2.component.css']
})
export class Assign2Component implements OnInit {

  constructor() { }

  user = '';

  resetName() {
    this.user = '';
  }

  buttonStatus() {
    if(this.user == null || this.user == '') {
      return true;
    }
    else return false;
  }

  ngOnInit() {}
}
