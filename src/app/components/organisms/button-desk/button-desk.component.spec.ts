import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonDeskComponent } from './button-desk.component';

describe('ButtonDeskComponent', () => {
  let component: ButtonDeskComponent;
  let fixture: ComponentFixture<ButtonDeskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonDeskComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonDeskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
