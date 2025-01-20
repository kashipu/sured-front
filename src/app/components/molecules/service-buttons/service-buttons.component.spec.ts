import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceButtonsComponent } from './service-buttons.component';

describe('ServiceButtonsComponent', () => {
  let component: ServiceButtonsComponent;
  let fixture: ComponentFixture<ServiceButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiceButtonsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
