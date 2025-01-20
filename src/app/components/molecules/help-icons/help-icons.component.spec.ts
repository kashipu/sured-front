import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpIconsComponent } from './help-icons.component';

describe('HelpIconsComponent', () => {
  let component: HelpIconsComponent;
  let fixture: ComponentFixture<HelpIconsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HelpIconsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HelpIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
