import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeValidationsComponent } from './home-validations.component';

describe('HomeValidationsComponent', () => {
  let component: HomeValidationsComponent;
  let fixture: ComponentFixture<HomeValidationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeValidationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeValidationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
