import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarsLayoutComponent } from './cars-layout.component';

describe('CarsLayoutComponent', () => {
  let component: CarsLayoutComponent;
  let fixture: ComponentFixture<CarsLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarsLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarsLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
