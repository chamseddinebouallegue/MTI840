import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {ExchangeIdService} from '../dashboard/exchange-id.service';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material';

import {RefreshListService} from '../dashboard/refresh-list.service';
@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})
export class TablesComponent implements OnInit {

  message:string;
  nodes:any;
  node:any;
  msgRef:any;
  sensors:any;

  constructor(private refresh: RefreshListService, public dialog: MatDialog, private exId: ExchangeIdService, private http: HttpClient) { }

  ngOnInit() {

    this.exId.currentMessage.subscribe(message => this.message = message);

    console.log(this.message);

    

    this.http.get('/nodes').subscribe(data => {
      this.nodes=data;
      console.log(this.nodes);
      //console.log(this.doctor);
      for(var i=0;i<this.nodes.length;i++){
        console.log(this.nodes[i]['sensors'])
      }
      //this.sensors=this.nodes['sensors'];
      //console.log(this.sensors);
    });



  
    

     

    

  }

  
  
DeletePatient(id){

  this.exId.currentMessage.subscribe(message => this.message = message);

  //console.log(id);
  

}




}

