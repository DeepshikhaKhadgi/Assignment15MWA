import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DbService } from './db.service';
import { HomeComponent } from './home.component';
import { StudentComponent } from './student.component';
import { myRoutes } from "./app.routes";
import { ProfileComponent } from './profile.component';
import { ErrorComponent } from './error.component';
import { MyCanActivateGuard } from './myActivate.guard';
import {MyCanDeactivateGuard} from './myCanDeactivate.guard';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StudentComponent,
    ProfileComponent,
    ErrorComponent   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    myRoutes
  ],
  providers: [DbService,MyCanActivateGuard,MyCanDeactivateGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
