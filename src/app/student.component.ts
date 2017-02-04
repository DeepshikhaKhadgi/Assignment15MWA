import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DbService } from './db.service';
import { student } from './db.service';
@Component({
  selector: 'app-student',
  template: `
    <nav>
      <div *ngFor= "let item of studentArray">
      <a [routerLink]="[item.id]"> {{item.name}}</a>  
      </div>
    </nav>
  `,
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
studentArray:[student];
  constructor(private dbService:DbService) {
  this.studentArray=dbService.getData();
   }

  ngOnInit() {
  }

}

