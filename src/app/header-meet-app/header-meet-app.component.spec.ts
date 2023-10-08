import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderMeetAppComponent } from './header-meet-app.component';

describe('HeaderMeetAppComponent', () => {
  let component: HeaderMeetAppComponent;
  let fixture: ComponentFixture<HeaderMeetAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderMeetAppComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderMeetAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
