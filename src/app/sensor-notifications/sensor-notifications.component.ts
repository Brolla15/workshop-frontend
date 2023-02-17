import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sensor-notifications',
  templateUrl: './sensor-notifications.component.html',
  styleUrls: ['./sensor-notifications.component.scss']
})
export class SensorNotificationsComponent implements OnInit {
  @Input() sensorId:number | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
