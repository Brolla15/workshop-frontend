import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SensorTypeAddComponent } from './sensor-type-add.component';

describe('SensorTypeAddComponent', () => {
  let component: SensorTypeAddComponent;
  let fixture: ComponentFixture<SensorTypeAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SensorTypeAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SensorTypeAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
});
