import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot,Router } from "@angular/router";
import { Observable } from "rxjs/Rx";
import { DbService  } from "./db.service"
import { Injectable } from '@angular/core';

@Injectable()
export class MyCanActivateGuard implements CanActivate {
    constructor(public dbService:DbService,public router:Router){
    }
 
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
   if ((route.params['id']) && (this.dbService.getDataById(parseInt(route.params['id'])))) {  
          return true;
    }
    else {
     this.router.navigate(['404']);}
  }
}
