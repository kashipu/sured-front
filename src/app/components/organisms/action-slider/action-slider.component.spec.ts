import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionSliderComponent } from './action-slider.component';

describe('ActionSliderComponent', () => {
  let component: ActionSliderComponent;
  let fixture: ComponentFixture<ActionSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActionSliderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActionSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
