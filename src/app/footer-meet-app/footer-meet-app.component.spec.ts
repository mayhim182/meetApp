import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterMeetAppComponent } from './footer-meet-app.component';

describe('FooterMeetAppComponent', () => {
  let component: FooterMeetAppComponent;
  let fixture: ComponentFixture<FooterMeetAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterMeetAppComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterMeetAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
