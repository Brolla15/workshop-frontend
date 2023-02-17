import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { IDropdown } from '../shared/models/IDropdown';
import { ISensor } from '../shared/models/ISensor';
import { ISensorType } from '../shared/models/IsensorType';
import { SensorsService } from '../shared/services/sensors.service';

@Component({
    selector: 'app-sensor-details',
    templateUrl: './sensor-details.component.html',
    styleUrls: ['./sensor-details.component.scss'],
    animations: []
})

export class SensorDetailsComponent implements OnInit {

    @Input() sensorId: number | undefined;
    @Output() refreshEvent: EventEmitter<void> = new EventEmitter();

    sensorTypes: IDropdown[] = [];
    sensor: ISensor | undefined;
    sensorTypeId: number | undefined;
    sensorType: ISensorType | undefined;

    constructor(private sensorService: SensorsService) { }

    ngOnInit(): void {
        this.sensorService.getSensorTypeDropdown().subscribe((sensorTypes: IDropdown[]) => {
            this.sensorTypes = sensorTypes;
        })
        this.getSensorDetails(this.sensorId!);
    }

    getSensorDetails(sensorId: number) {
        this.sensorService.getSensor(sensorId).subscribe((sensor: ISensor) => {
            this.sensor = sensor;
        })

        this.sensorTypeId = this.sensor?.SensorTypeId;
    }

    OnSubmit() {
        this.sensor!.typeName = this.sensorTypes.find(x => x.id == this.sensor?.SensorTypeId)!.name;
        if (this.sensor != undefined) {
            this.sensorService.modifySensor(this.sensor).subscribe(() => {
                this.refreshEvent.emit();
            });
        }
    }
}