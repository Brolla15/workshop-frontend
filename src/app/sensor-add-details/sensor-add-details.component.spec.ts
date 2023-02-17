import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SensorAddDetailsComponent } from './sensor-add-details.component';

describe('SensorAddDetailsComponent', () => {
  let component: SensorAddDetailsComponent;
  let fixture: ComponentFixture<SensorAddDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SensorAddDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SensorAddDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
