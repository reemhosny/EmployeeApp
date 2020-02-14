import { Anonymous } from './guards/Anonymous.gurad';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from "./components/about/about.component";
import { LoginComponent } from "./components/login/login.component";
import { AddEmployeeComponent } from "./components/employee/add-employee/add-employee.component";
import { ListEmployeeComponent } from "./components/employee/list-employee/list-employee.component";
import { EditEmployeeComponent } from "./components/employee/edit-employee/edit-employee.component";
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [

  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'about', component: AboutComponent},
  { path: 'login', component: LoginComponent },
  { path: 'add-employee', component: AddEmployeeComponent, canActivate: [AuthGuard] },
  { path: 'list-employee', component: ListEmployeeComponent, canActivate: [AuthGuard] },
  { path: 'edit-employee', component: EditEmployeeComponent, canActivate: [AuthGuard] },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
