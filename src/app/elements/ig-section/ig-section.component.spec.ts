import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IgSectionComponent } from './ig-section.component';

describe('IgSectionComponent', () => {
  let component: IgSectionComponent;
  let fixture: ComponentFixture<IgSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IgSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IgSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
