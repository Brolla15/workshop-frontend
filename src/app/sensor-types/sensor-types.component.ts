import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ISensor } from '../shared/models/ISensor';
import { SensorsService } from '../shared/services/sensors.service';
import { Location } from '@angular/common';
import { IDropdown } from '../shared/models/IDropdown';
import { ISensorType } from '../shared/models/IsensorType';



@Component({
  selector: 'app-sensor-types',
  templateUrl: './sensor-types.component.html',
  styleUrls: ['./sensor-types.component.scss']
})
export class SensorTypesComponent implements OnInit {

  sensorTypes: ISensorType[] = [];
  sensorType: ISensorType | undefined;

  //add
  add: boolean = false;
  //edit
  edit: boolean = false;
  sensorTypeId: number | undefined;

  //delete
  deleteId: number | undefined;
  delete: boolean = false;
  displayedColumns: string[] = ['id', 'name', 'fromInterval', 'toInterval', 'change', 'delete'];

  constructor(private router: Router, private route: ActivatedRoute, private sensorService: SensorsService, private location: Location,) { }


  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.sensorService.getSensorTypes().subscribe({
      next: sensorTypes => {
        this.sensorTypes = sensorTypes;
        console.log('getSensorTypes subscribe -> next notification: ' + JSON.stringify(this.sensorTypes));
      },
      error: err => {
        console.log('getSensorTypes subscribe -> error notification');
      },
      complete() {
        console.log('getSensorTypes subscribe -> complete notification');
      }
    })
  }

  refreshEvent() {
    console.log("refresh Event");
    this.edit = false;
    this.getData();
  }
  goToPage() {
    this.router.navigate([`sensors`]);
  }
  onChangeClick(sensorTypeId: number) {
      if (this.sensorTypeId == sensorTypeId && this.edit == true) {
      this.sensorTypeId = undefined;
      this.edit = false;
    }
    else {
      this.edit = true;
      this.add = false;
      this.sensorTypeId = sensorTypeId;
    }
  }
  onAddClick() {
    if (this.add == true) {
      this.add = false;
      this.edit = false;
    }
    else {
      this.add = true;
      this.edit = false;
    }
  }

  onDeleteClick(sensorTypeId: number) {
    this.delete = true;

    this.sensorService.deleteSensorType(sensorTypeId).subscribe({
      next: _ => {
          const index = this.sensorTypes.indexOf(this.sensorTypes.find(x => x.id == sensorTypeId)!, 0);
          if (index > -1) {
            this.sensorTypes.splice(index, 1);
          }
          

          this.sensorTypes = [...this.sensorTypes];
          alert(`Sensor type with id: ${sensorTypeId} has been successfully deleted.`);
      },
      error: err => {
        alert("Sensor type has a sensor of its type");
      },
      complete() {
        console.log('getSensorTypes subscribe -> complete notification');
      }
    })
  }
}
