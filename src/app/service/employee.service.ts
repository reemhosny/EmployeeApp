import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http'; 
import { Observable } from 'rxjs';  
import {Router} from "@angular/router";


import {Employee} from "../model/employee";   

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {


  ApiUrl= "http://dummy.restapiexample.com/api/v1/employees";

  constructor(private httpclient: HttpClient, private router: Router ) { }


  login(employeeInfo: Employee){
    localStorage.setItem('ACCESS_TOKEN', "access_token");
  }

  isLoggedIn(){
    return localStorage.getItem('ACCESS_TOKEN') !== null;
  }

  logout(){
    localStorage.removeItem('ACCESS_TOKEN');
     this.router.navigate(["login"]);
  }

  

  getEmployees() : Observable<Employee> {
    return this.httpclient.get<Employee>(this.ApiUrl);
  }

  getEmployeeById(id: number): Observable<Employee> {
    return this.httpclient.get<Employee>(this.ApiUrl + id);
  }

  createEmployee(employee: Employee): Observable<Employee> {
    return this.httpclient.post<Employee>(this.ApiUrl, employee);                  
  }

  updateEmployee(employee: Employee): Observable<Employee> {
    return this.httpclient.put<Employee>(this.ApiUrl + employee.data.id, employee);
  }

  deleteEmployee(id: number): Observable<Employee> {
    return this.httpclient.delete<Employee>(this.ApiUrl + id);
  }


}
