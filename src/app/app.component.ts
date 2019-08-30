import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor() {
    // setTimeout(() => {
    //   this.buttonState = false;
    // }, 2500);
  }
  name = 'Hiroyuki';
  // serverName = 'Apollo';
  // serverStatus = 'offline';
  // serverPID = 11;
  // statusFlag = false;
  // buttonState = true;

  // toggleServerStatus() {
  //   this.statusFlag = !this.statusFlag;
  //   if(this.statusFlag == true) {
  //     this.serverStatus = 'online';
  //   }
  //   else this.serverStatus = 'offline';
  //   return this.serverStatus;
  // }
  flag = true;

  toggleFlag() {
    this.flag = !this.flag;
    return this.flag;
  }

  getColor() {
    if(this.flag == true) {
      return 'green';
    }
    else return 'red';
  }

  studentRoster = ['Sasuke', 'Noctis', 'Vincent'];
  currentName: string;

  add() {
    this.studentRoster.push(this.currentName);
  }
}
