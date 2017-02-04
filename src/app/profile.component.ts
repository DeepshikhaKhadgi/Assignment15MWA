import { Component, OnInit,OnDestroy } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs/Rx"
import { DbService } from './db.service';
import { student } from './db.service';

@Component({
  selector: 'app-profile',
  template: `
    <div>
     <h1>Studnet Name: {{studentArray.name}} </h1>
     <h1> Email :{{studentArray.email}}</h1>
    </div>
  `,
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {
private subscription:Subscription;
id:number;
studentArray:student;
  constructor(private route:ActivatedRoute,private dbService:DbService) { 
   
   }
 ngOnDestroy(){
   this.subscription.unsubscribe();
 }
  ngOnInit() {
     this.subscription=this.route.params.subscribe(
      (params:any)=>{
        this.id=params.id;
        this.studentArray=this.dbService.getDataById(parseInt(params.id))
      });     
  }

}
