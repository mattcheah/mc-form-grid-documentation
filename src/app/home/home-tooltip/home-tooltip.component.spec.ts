import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeTooltipComponent } from './home-tooltip.component';

describe('HomeTooltipComponent', () => {
  let component: HomeTooltipComponent;
  let fixture: ComponentFixture<HomeTooltipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeTooltipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeTooltipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
