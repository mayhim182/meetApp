import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-sharing-screen',
  templateUrl: './sharing-screen.component.html',
  styleUrls: ['./sharing-screen.component.css']
})
export class SharingScreenComponent {
  @ViewChild('videoElement') videoElement: ElementRef | undefined;

  onlineUsers: string[] = ['Mayank','Tamop Hasy'];

  addUser(username: string): void {
    this.onlineUsers.push(username);
  }

  removeUser(username: string): void {
    const index = this.onlineUsers.indexOf(username);
    if (index !== -1) {
      this.onlineUsers.splice(index, 1);
    }
  }

  setVideoStream(stream: MediaStream): void {
    const video: HTMLVideoElement = this.videoElement?.nativeElement;
    video.srcObject = stream;
  }
}


