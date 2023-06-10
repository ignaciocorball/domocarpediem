import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvalibilityFormComponent } from './avalibility-form.component';

describe('AvalibilityFormComponent', () => {
  let component: AvalibilityFormComponent;
  let fixture: ComponentFixture<AvalibilityFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvalibilityFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvalibilityFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
