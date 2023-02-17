import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SensorsService } from '../shared/services/sensors.service';
import { ISensor } from '../shared/models/ISensor';
import { IDropdown } from '../shared/models/IDropdown';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { HttpClient } from '@angular/common/http';
import { catchError, map, merge, startWith, switchMap } from 'rxjs';
import { ISensorType } from '../shared/models/IsensorType';

@Component({
  selector: 'app-sensors',
  templateUrl: './sensors.component.html',
  styleUrls: ['./sensors.component.scss']
})

export class SensorsComponent implements OnInit {

  initialSelection = [];

//  @ViewChild(MatPaginator) paginator: MatPaginator;
//  @ViewChild(MatSort) sort: MatSort;

  sensors: ISensor[] = [];
  sensorTypes: IDropdown[] = [];
  childActive:boolean=false;

  //add
  add:boolean =false;

  //edit
  sensorId: number | undefined;
  edit: boolean = false;
  sensor: ISensor | undefined;

  //delete
  deleteId: number | undefined;
  delete: boolean = false;

  //notification
  notification:boolean=false;

  displayedColumns: string[] = ['id', 'serialNumber', 'value', 'TypeId', 'change', 'delete','check','notification']
  // exampleDatabase: ExampleHttpDatabase | null;
  // data: GithubIssue[] = [];

  resultsLength = 0;
  isLoadingResults = true;
  isRateLimitReached = false;
  constructor(private router: Router,private _httpClient: HttpClient, private sensorsService: SensorsService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getData();
  }
  goToPage(){
    this.router.navigate([`sensorTypes`]);
  }

  getData() {
    
    this.sensorsService.getSensors().subscribe({
      next: sensors => {
        this.sensors = sensors;
        console.log('getSensors subscribe -> next notification: ' + JSON.stringify(this.sensors));
      },
      error: err => {
        console.log('getSensors subscribe -> error notification');
      },
      complete() {
        console.log('getSensors subscribe -> complete notification');
      }
    })
  }
  refreshEvent() {
    this.edit = false;
    this.getData();

  }
  onChangeClick(sensorId: number) {
    
    if (this.sensorId == sensorId && this.edit == true) {
      this.sensorId = undefined;
      this.edit = false;
    }
    else {
      this.edit = true;
      this.add=false;
      this.sensorId = sensorId;
    }
  }
  onNotification(sensorId:number){
    if(this.notification=true && this.sensorId==sensorId){
      this.sensorId=undefined;
      this.notification=false;
    }else{
      this.notification=true;
      this.sensorId=sensorId;
    }
  }
  onAddClick(){
    if(this.add==true){
      this.add=false;
      this.edit=false;
    }
    else{
      this.add=true;
      this.edit=false;
    }
  }
  onCheckClick(sensorId:number){
    this.sensorsService.startSenzorProcess(sensorId).subscribe();
  
  }
  onDeleteClick(sensorId: number) {
    this.delete = true;
    this.sensorsService.deleteSensor(sensorId).subscribe(() => {
      const index = this.sensors.indexOf(this.sensors.find(x => x.id == sensorId)!, 0);
      if (index > -1) {
        this.sensors.splice(index, 1);
      }


      this.sensors = [...this.sensors];
      alert(`Sensor with id: ${this.sensor?.id} has been successfully deleted.`);
    });
  }
  
}
function observableOf(arg0: null): any {
  throw new Error('Function not implemented.');
}

