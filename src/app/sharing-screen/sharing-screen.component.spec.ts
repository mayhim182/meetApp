import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharingScreenComponent } from './sharing-screen.component';

describe('SharingScreenComponent', () => {
  let component: SharingScreenComponent;
  let fixture: ComponentFixture<SharingScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SharingScreenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SharingScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
