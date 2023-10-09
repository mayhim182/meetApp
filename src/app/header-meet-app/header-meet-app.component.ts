import { Component } from '@angular/core';

@Component({
  selector: 'app-header-meet-app',
  templateUrl: './header-meet-app.component.html',
  styleUrls: ['./header-meet-app.component.css']
})
export class HeaderMeetAppComponent {

  screenShareFlag = true;

  handleScreenSharing(){
    this.screenShareFlag = !this.screenShareFlag;
  }

}
