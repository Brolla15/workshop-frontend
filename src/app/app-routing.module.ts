import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SensorDetailsComponent } from './sensor-details/sensor-details.component';
import { SensorTypeAddComponent } from './sensor-type-add/sensor-type-add.component';
import { SensorTypesComponent } from './sensor-types/sensor-types.component';
import { SensorsComponent } from './sensors/sensors.component';

const routes: Routes = [
  {path: '', redirectTo: '/sensors',pathMatch:'full'},
  {path:'sensors', component:SensorsComponent  },
  { path: '', redirectTo: '/sensors', pathMatch: 'full' },
  {path: 'sensorTypes', component:SensorTypesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
