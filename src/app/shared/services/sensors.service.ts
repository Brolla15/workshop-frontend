import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ISensor } from '../models/ISensor';
import { ISensorType } from '../models/IsensorType';
import { IDropdown } from '../models/IDropdown';

const apiUrl=environment.apiUrl;

@Injectable({
    providedIn:"root"
})
export class SensorsService{

    constructor(
        private http:HttpClient
    ){}

    getSensors():Observable<ISensor[]>{
        const url = `${apiUrl}api/sensors`;
        console.log(url);
        return this.http.get<ISensor[]>(url).pipe(tap(data=>{
            console.log('getSensors: ' +JSON.stringify(data));
        }));
    }

    getSensor(id:number):Observable<ISensor>{
        const url = `${apiUrl}api/sensors/${id}`;
        return this.http.get<ISensor>(url)
        .pipe(
            tap(data=>{
            console.log('getSensor: '+JSON.stringify(data));
        }),
        catchError(this.handleError)
        );
    }
    addSensor(newSensor:ISensor):Observable<any>{
        const url=`${apiUrl}api/sensors/add-sensor`;
        return this.http.post(url,newSensor)
            .pipe(tap(taskResponse=>console.log("newSensor op has been sccessfully finished"))
        );
    }
    modifySensor(modifiedSensor:ISensor):Observable<any>{
        const url = `${apiUrl}api/sensors`;
        console.log(modifiedSensor);
        return this.http.put(url,modifiedSensor)
        .pipe(
            tap(taskResponse=>console.log("modifySensor op has been successfully finished"))
        );
    }
    getSensorType(id:number):Observable<ISensorType>{
        const url = `${apiUrl}api/sensorType/${id}`;

        return this.http.get<ISensorType>(url)
        .pipe(
            tap(data=>{
                console.log('getSensorType: '+JSON.stringify(data));
            })
        );
    }
    getSensorTypes():Observable<ISensorType[]>{
        const url = `${apiUrl}api/sensorType/get-sensorTypes`;
        return this.http.get<ISensorType[]>(url)
        .pipe(
            tap(data=>{
                console.log('getSensorType: '+JSON.stringify(data));
            })
        );
        
    }
    deleteSensorType(id:number):Observable<ISensorType>{
        const url=`${apiUrl}api/sensorType/${id}`;
        return this.http.delete<ISensorType>(url);
    }

    modifySensorType(modifiedSensorType:ISensorType):Observable<any>{
        const url = `${apiUrl}api/sensorType/modifySensorType`;
        console.log(modifiedSensorType);
        return this.http.put(url,modifiedSensorType)
        .pipe(
            tap(taskResponse=> console.log('modifySensorType op has been successfully finished'))
        );
    }
    getSensorTypeDropdown():Observable<IDropdown[]>{
        const url = `${apiUrl}api/sensorType/get-sensorTypes`;
        return this.http.get<IDropdown[]>(url)
        .pipe(
            tap(data=>{
                console.log('getSensorTypesDropdown: '+JSON.stringify(data));
            })
        );
    }
    getSensorsDropdown():Observable<IDropdown[]>{
        const url = `${apiUrl}api/sensors`;
        return this.http.get<IDropdown[]>(url)
        .pipe(
            tap(data=>{
                console.log('getSensorTypesDropdown: '+JSON.stringify(data));
            })
        );
    }
    deleteSensor(id:number):Observable<ISensor>{
        const url = `${apiUrl}api/sensors/${id}`;
        return this.http.delete<ISensor>(url);
    }
    addSensorType(sensorType:ISensorType):Observable<ISensorType>{
        const url=`${apiUrl}api/sensorType`;
        return this.http.post<ISensorType>(url,sensorType);
    }
    private handleError(err: HttpErrorResponse){
        let errorMessage='';
        if(err.error instanceof ErrorEvent){
            errorMessage='An error occurred: ${err.error.message}';
        }
        else{
            errorMessage='Server returned code: ${err.status}, error message is: ${err.message}';
        }
        console.error(errorMessage);
        return throwError(()=>errorMessage);
    }
    startSenzorProcess(senzorId: number){
        const url=`${apiUrl}api/sensors/check/${senzorId}`;
        return this.http.post(url, senzorId)
        .pipe(
          tap(taskResponse => console.log("SensorProcess started"))
        )
      }
}