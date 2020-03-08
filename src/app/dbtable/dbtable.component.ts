import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import { ChartComponent } from 'angular2-highcharts/index';

@Component({
  selector: 'app-dbtable',
  templateUrl: './dbtable.component.html',
  styleUrls: ['./dbtable.component.scss']
})
export class DbtableComponent implements OnInit {

 data ={};

  id:any;

    values;

    dataGraph=[];


    title:any;


  constructor(public dialog: MatDialog, private http: HttpClient, private router: Router, @Inject(MAT_DIALOG_DATA) public NodeId: any, @Inject(MAT_DIALOG_DATA) public SensId: any,@Inject(MAT_DIALOG_DATA) public SensType:any) { }

  ngOnInit() {

    this.http.get('/nodes/'+this.NodeId['NodeId']+'/sensors/'+this.SensId['SensId']+'/data').subscribe(data => {
  // x: Date.parse(data[0]['createdAt']),
  //y: data[0]['value']};



  this.data=data['data'];
  this.title=this.SensType['SensType'];
  //console.log(this.data);
  for (var i=0; i < Object.keys(this.data).length ;i++) {

  //console.log(data[i]['value']);
  
 // this.graph.push(this.data[i]['createdAt'], this.data[i]['value']);
    this.values = [Date.parse(this.data[i]['createdAt']), this.data[i]['value']];
    this.dataGraph.push(this.values);
}
console.log(this.dataGraph);
 // this.renderChart();
 
  

});



  }

}
