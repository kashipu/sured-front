import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FixedOptionsComponent } from './fixed-options.component';

describe('FixedOptionsComponent', () => {
  let component: FixedOptionsComponent;
  let fixture: ComponentFixture<FixedOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FixedOptionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FixedOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
