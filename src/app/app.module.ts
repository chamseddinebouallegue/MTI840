import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {IMqttMessage, MqttModule, IMqttServiceOptions } from "ngx-mqtt";
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { AgmCoreModule } from '@agm/core';
import { ChartModule } from 'angular2-highcharts';

import {PopupModule} from 'ng2-opd-popup';
import {MAT_DIALOG_DEFAULT_OPTIONS,  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule} from '@angular/material';
import { GraphDataComponent } from './pages/graph-data/graph-data.component';
import { DbgraphComponent } from './dbgraph/dbgraph.component';
import { DbtableComponent } from './dbtable/dbtable.component';





export const MQTT_SERVICE_OPTIONS: IMqttServiceOptions = {
  hostname: 'broker.hivemq.com',
  port: 8000,
  path: '/mqtt'
}
declare var require: any;
export function highchartsFactory() {



  const hc = require('highcharts/highstock');
  const dd = require('highcharts/modules/exporting');
  dd(hc);
  return hc;
}

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    RouterModule,
    AppRoutingModule,
    MatDialogModule,
    PopupModule.forRoot(),
    ChartModule.forRoot(require('highcharts/highstock')),
    MqttModule.forRoot(MQTT_SERVICE_OPTIONS)
    
    
    
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AuthLayoutComponent,
    GraphDataComponent,
    DbgraphComponent,
    DbtableComponent
    
   
    
   
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [GraphDataComponent, DbgraphComponent, DbtableComponent   ]
})
export class AppModule { }
