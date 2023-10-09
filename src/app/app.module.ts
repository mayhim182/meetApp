import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderMeetAppComponent } from './header-meet-app/header-meet-app.component';
import { FooterMeetAppComponent } from './footer-meet-app/footer-meet-app.component';
import { SharingScreenComponent } from './sharing-screen/sharing-screen.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderMeetAppComponent,
    FooterMeetAppComponent,
    SharingScreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
