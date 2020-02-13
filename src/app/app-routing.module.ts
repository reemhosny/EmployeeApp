import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {AboutComponent} from "./about/about.component";
import {LoginComponent} from "./login/login.component";
import {AddEmployeeComponent} from "./employee/add-employee/add-employee.component";
import {ListEmployeeComponent} from "./employee/list-employee/list-employee.component";
import {EditEmployeeComponent} from "./employee/edit-employee/edit-employee.component"  ;
import { AuthGuard } from './auth.guard';                                       

const routes: Routes = [
   
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'about', component: AboutComponent },
  { path: 'login', component: LoginComponent },
  { path: 'add-employee', component: AddEmployeeComponent },
  { path: 'list-employee', component: ListEmployeeComponent,canActivate: [AuthGuard]},
  { path: 'edit-employee', component: EditEmployeeComponent}, 



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
