import { RouterModule, Routes } from "@angular/router";

import { HomeComponent } from "./home.component";
import { StudentComponent } from "./student.component";
import { ProfileComponent } from "./profile.component";
import { MyCanActivateGuard } from "./myActivate.guard";
import { MyCanDeactivateGuard } from "./myCanDeactivate.guard";
import { ErrorComponent  } from "./error.component";

const MY_ROUTES:Routes=[
    { path:'home',component:HomeComponent },
    { path:'students',component:StudentComponent },
    { path:'students/:id',component:ProfileComponent, canActivate:[MyCanActivateGuard], canDeactivate: [MyCanDeactivateGuard]},
    {path:'404',component:ErrorComponent},
    {path:'**',redirectTo:'home'}
]
export const myRoutes = RouterModule.forRoot(MY_ROUTES);
