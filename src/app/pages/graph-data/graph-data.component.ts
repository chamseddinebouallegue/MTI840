import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {ExchangeIdService} from '../dashboard/exchange-id.service';
import { ChartComponent } from 'angular2-highcharts/index';
import { IMqttMessage, MqttService } from 'ngx-mqtt';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-graph-data',
  templateUrl: './graph-data.component.html',
  styleUrls: ['./graph-data.component.scss']
})


export class GraphDataComponent implements OnInit {
   msg: any;
  mqttMSG:any;
  
  private subscription: Subscription;
  subscribedMessage:any;
 // isConnected: boolean = false;
 // @ViewChild('msglog', { static: true }) msglog: ElementRef;

 message:string;
 constructor(private exId: ExchangeIdService, public dialog: MatDialog, private http: HttpClient, private router: Router, @Inject(MAT_DIALOG_DATA) public Topic: any, @Inject(MAT_DIALOG_DATA) public SensType: any, private _mqttService: MqttService) {
    
        //setInterval(() => this.chart.series[0].addPoint(Math.random() * 10), 1000);
    }
    chart : any;
    x:any;
    y:any;
    options: any;
    saveInstance(chartInstance) {
        this.chart = chartInstance;
    }


      ngOnInit() {

        this.subscription = this._mqttService.observe(this.Topic['Topic']).subscribe((message: IMqttMessage) => {
          this.mqttMSG = message.payload.toString();
          console.log(this.mqttMSG);
                   this.x = (new Date()).getTime(), // current time
                   this.y = parseInt(this.mqttMSG),
                                   
                this.chart.series[0].addPoint([this.x, this.y]);
          
    });
   
            this.options = {
          chart: { type: 'spline' },
          title: { text : this.SensType['SensType']},
          series: [{ data: [] }]
        };
        //setInterval(() => this.chart.series[0].addPoint(Math.random() * 10), 1000);
  
      }
}
