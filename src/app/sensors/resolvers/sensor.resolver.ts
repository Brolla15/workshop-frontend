import { Injectable } from '@angular/core';
import {
    Router, Resolve,
    RouterStateSnapshot,
    ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { ISensor } from 'src/app/shared/models/ISensor';
import { SensorsService } from 'src/app/shared/services/sensors.service';

@Injectable({
    providedIn:'root'
})
export class SensorsResolver implements Resolve<ISensor[] | null>{

    constructor(
        private SensorsService:SensorsService
    ){}
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): ISensor[] | Observable<ISensor[] | null> | Promise<ISensor[] | null> | null {
        console.log('SensorsResolver has been triggered');
        return this.SensorsService.getSensors();
    }
}