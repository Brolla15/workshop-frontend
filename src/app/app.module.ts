import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SensorTypeDetailsComponent } from './sensor-type-details/sensor-type-details.component';
import { SensorDetailsComponent } from './sensor-details/sensor-details.component';
import { SensorsComponent } from './sensors/sensors.component';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './shared/material.module';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SensorAddDetailsComponent } from './sensor-add-details/sensor-add-details.component';
import { SensorTypeAddComponent } from './sensor-type-add/sensor-type-add.component';
import { SensorTypesComponent } from './sensor-types/sensor-types.component';
import { SensorNotificationsComponent } from './sensor-notifications/sensor-notifications.component';

@NgModule({
  declarations: [
    AppComponent,
    SensorTypeDetailsComponent,
    SensorDetailsComponent,
    SensorsComponent,
    SensorAddDetailsComponent,
    SensorTypeAddComponent,
    SensorTypeAddComponent,
    SensorTypesComponent,
    SensorNotificationsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
