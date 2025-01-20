import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoneyShowComponent } from './money-show.component';

describe('MoneyShowComponent', () => {
  let component: MoneyShowComponent;
  let fixture: ComponentFixture<MoneyShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MoneyShowComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoneyShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
