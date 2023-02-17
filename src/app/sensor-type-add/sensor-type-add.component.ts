import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IDropdown } from '../shared/models/IDropdown';
import { ISensorType } from '../shared/models/IsensorType';
import { SensorsService } from '../shared/services/sensors.service';

@Component({
  selector: 'app-sensor-type-add',
  templateUrl: './sensor-type-add.component.html',
  styleUrls: ['./sensor-type-add.component.scss']
})
export class SensorTypeAddComponent implements OnInit {

  @Output() refreshEvent: EventEmitter<void> = new EventEmitter();

  sensorType: ISensorType = {
    name: "",
    fromInterval: 0,
    toInterval: 0
  };

  constructor(private router: Router, private _httpClient: HttpClient, private sensorsService: SensorsService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void { }

  goToPage() {
    this.router.navigate([`sensors`]);
  }
  OnSubmit() {
    this.sensorsService.addSensorType(this.sensorType).subscribe(() => {
      this.refreshEvent.emit();
    });
  }
}
