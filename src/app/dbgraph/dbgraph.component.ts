import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import { ChartComponent } from 'angular2-highcharts/index';

@Component({
  selector: 'app-dbgraph',
  templateUrl: './dbgraph.component.html',
  styleUrls: ['./dbgraph.component.scss']
})
export class DbgraphComponent implements OnInit {

  data ={};

  id:any;

    graph;

    dataGraph=[];

  options: Object;

  @ViewChild('chartVar') refObj: any;
  constructor(public dialog: MatDialog, private http: HttpClient, private router: Router, @Inject(MAT_DIALOG_DATA) public NodeId: any, @Inject(MAT_DIALOG_DATA) public SensId: any,@Inject(MAT_DIALOG_DATA) public SensType:any) {}

  ngOnInit() {


    //this.exId.currentMessage.ubscribe(message => this.id = message);
this.http.get('/nodes/'+this.NodeId['NodeId']+'/sensors/'+this.SensId['SensId']+'/data').subscribe(data => {
  // x: Date.parse(data[0]['createdAt']),
  //y: data[0]['value']};

  this.data=data['data'];
  //console.log(this.data);
  for (var i=0; i < Object.keys(this.data).length ;i++) {

  //console.log(data[i]['value']);
  
 // this.graph.push(this.data[i]['createdAt'], this.data[i]['value']);
    this.graph = [Date.parse(this.data[i]['createdAt']), this.data[i]['value']];
    this.dataGraph.push(this.graph);
}
console.log(this.dataGraph);
 // this.renderChart();
  this.options = {

    title: {
      text: this.SensType['SensType']
    },
    xAxis: {
      opposite: true
    },
    yAxis: {
      opposite: true,
      plotLines: [{
        value: 40,
        color: 'green',
        dashStyle: 'shortdash',
        width: 2,
        label: {
          text: 'Threshold'
        }
      }],
      exporting: {
        enabled: false
      }
    },

    series: [{
      name: this.SensType['SensType'],
      data: this.dataGraph
    }
    ]

  }
  //this.refObj.chart.series[0].addPoint(this.measures, false);


});



   /* this.options = {
      title : { text : 'Temperature' },
      series: [{
        data: [29.9, 71.5, 106.4, 129.2],
      }]
    };*/
  }





  onCloseOk(): void {
    const dialogRef=this.dialog.closeAll();
  }
  renderChart() {
    this.options = {

      title: {
        text: 'HeartRate'
      },
      xAxis: {
        opposite: true
      },
      yAxis: {
        opposite: true,
        plotLines: [{
          value: 90,
          color: 'green',
          dashStyle: 'shortdash',
          width: 2,
          label: {
            text: 'Threshold'
          }
        }],
        exporting: {
          enabled: false
        }
      },

      series: [{
        name: 'HeartRate',
        data: [ [Date.UTC(1970, 10, 25), 0],
          [Date.UTC(1970, 11,  6), 0.25],
          [Date.UTC(1970, 11, 20), 1.41],
          [Date.UTC(1970, 11, 25), 1.64],
          [Date.UTC(1971, 0,  4), 1.6],
          [Date.UTC(1971, 0, 17), 2.55],
          [Date.UTC(1971, 0, 24), 2.62],
          [Date.UTC(1971, 1,  4), 2.5]]
      }
      ]

    }
  }
  chart: Object;

  loadChart(chartInstance) {
    this.chart = chartInstance;
  }

}
