import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'; 
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule} from "@angular/forms";


import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { AboutComponent } from './components/about/about.component';
import { AddEmployeeComponent } from './components/employee/add-employee/add-employee.component';
import { EditEmployeeComponent } from './components/employee/edit-employee/edit-employee.component';
import { ListEmployeeComponent } from './components/employee/list-employee/list-employee.component';
import { LoginComponent } from './components/login/login.component';


import {EmployeeService} from "./service/employee.service";
import { TokenInterceptor } from './helpers/token.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AboutComponent,
    AddEmployeeComponent,
    EditEmployeeComponent,
    ListEmployeeComponent,
    LoginComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [EmployeeService , 
    TokenInterceptor,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    }
  ],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
