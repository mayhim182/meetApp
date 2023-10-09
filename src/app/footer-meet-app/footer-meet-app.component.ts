import { Component } from '@angular/core';

@Component({
  selector: 'app-footer-meet-app',
  templateUrl: './footer-meet-app.component.html',
  styleUrls: ['./footer-meet-app.component.css']
})
export class FooterMeetAppComponent {
  isVideoOn:boolean = false;
  isMicOn:boolean = false;
  isScreenSharing:boolean = false;
}
