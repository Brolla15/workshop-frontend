import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA , MatDialog} from '@angular/material/dialog';
import { IDropdown } from '../shared/models/IDropdown';
import { ISensor } from '../shared/models/ISensor';
import { ISensorData } from '../shared/models/ISensorData';
import { ISensorType } from '../shared/models/IsensorType';
import { SensorsService } from '../shared/services/sensors.service';

@Component({
  selector: 'app-sensor-add-details',
  templateUrl: './sensor-add-details.component.html',
  styleUrls: ['./sensor-add-details.component.scss']
})
export class SensorAddDetailsComponent implements OnInit {
  @Output() refreshEvent: EventEmitter<void> = new EventEmitter();

  sensor:ISensor = {
    serialNumber:"",
    value:0,
    SensorTypeId:1,
    typeName:""
  };
  sensorTypes:IDropdown[]=[];
  sensorType:ISensorType | undefined;
  constructor(private sensorService:SensorsService) {}


  ngOnInit(): void {
    this.sensorService.getSensorTypeDropdown().subscribe((sensorTypes: IDropdown[])=>{
      this.sensorTypes=sensorTypes;
    })
  }
  getSensorTypeDetails(typeId:number){
    this.sensorService.getSensorType(typeId).subscribe((sensorType:ISensorType)=>
    {

      this.sensor!.typeName=this.sensorTypes.find(x=>x.id==this.sensor?.SensorTypeId)!.name;
    })
  }
  OnSubmit(){
    this.sensor!.typeName=this.sensorTypes.find(x=>x.id==this.sensor?.SensorTypeId)!.name;
    if(this.sensor != undefined){
      console.log(this.sensor);
        this.sensorService.addSensor(this.sensor).subscribe(()=>{
            this.refreshEvent.emit();
        });
    }
  }
  
}
