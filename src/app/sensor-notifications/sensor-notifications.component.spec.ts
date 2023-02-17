import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SensorNotificationsComponent } from './sensor-notifications.component';

describe('SensorNotificationsComponent', () => {
  let component: SensorNotificationsComponent;
  let fixture: ComponentFixture<SensorNotificationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SensorNotificationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SensorNotificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
