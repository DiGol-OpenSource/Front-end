import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SportFieldHomeComponent } from './sport-field-home.component';

describe('SportFieldHomeComponent', () => {
  let component: SportFieldHomeComponent;
  let fixture: ComponentFixture<SportFieldHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SportFieldHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SportFieldHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
