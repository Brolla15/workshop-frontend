import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ISensor } from '../shared/models/ISensor';
import { SensorsService } from '../shared/services/sensors.service';
import { Location } from '@angular/common';
import { IDropdown } from '../shared/models/IDropdown';
import { ISensorType } from '../shared/models/IsensorType';



@Component({
  selector: 'app-sensor-type-details',
  templateUrl: './sensor-type-details.component.html',
  styleUrls: ['./sensor-type-details.component.scss']
})
export class SensorTypeDetailsComponent implements OnInit {

  @Input() sensorTypeId:number | undefined;
  @Output() refreshEvent: EventEmitter<void> = new EventEmitter();

  sensorType:ISensorType | undefined;

  displayedColumns: string[] = ['id', 'name', 'value', 'TypeId', 'change', 'delete']

  constructor(private sensorService:SensorsService){}
  

  ngOnInit(): void {
    this.getSensorTypeDetails(this.sensorTypeId!);
  }

  getSensorTypeDetails(sensorTypeId:number){
    this.sensorService.getSensorType(sensorTypeId).subscribe((sensorType:ISensorType)=>{
      this.sensorType=sensorType;
    })
  }

  onSubmit(){
    if(this.sensorType !=undefined){
      this.sensorService.modifySensorType(this.sensorType).subscribe(()=>{
        this.refreshEvent.emit();
        alert('${this.sensorType?.id} has been successfully modified.');
      });
    }
  }
}
