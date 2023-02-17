import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SensorTypeDetailsComponent } from './sensor-type-details.component';

describe('SensorTypeDetailsComponent', () => {
  let component: SensorTypeDetailsComponent;
  let fixture: ComponentFixture<SensorTypeDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SensorTypeDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SensorTypeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
