import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionBookingAwardComponent } from './section-booking-award.component';

describe('SectionBookingAwardComponent', () => {
  let component: SectionBookingAwardComponent;
  let fixture: ComponentFixture<SectionBookingAwardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionBookingAwardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionBookingAwardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
