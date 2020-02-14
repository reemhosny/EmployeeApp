import { EmployeeOutput, DeleteOutput } from './../model/employee';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


import { Employee } from "../model/employee";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {


  ApiUrl = "http://dummy.restapiexample.com/api/v1/employees";
  //deleteUrl = "http://dummy.restapiexample.com/api/v1/delete/";
  //createUrl = "http://dummy.restapiexample.com/api/v1/create";
  //updateUrl = "	http://dummy.restapiexample.com/api/v1/update/";
  //getUrl = "	http://dummy.restapiexample.com/api/v1/employee/";

  constructor(private httpclient: HttpClient) { }

   getEmployees(): Observable<EmployeeOutput<Employee[]>> {
    return this.httpclient.get<EmployeeOutput<Employee[]>>(this.ApiUrl);
  }

  getEmployeeById(id: number): Observable<Employee> {
    return this.httpclient.get<Employee>(this.ApiUrl + id);
  }

  createEmployee(employee: Employee): Observable<Employee> {
    return this.httpclient.post<Employee>(this.ApiUrl, employee);
  }

  updateEmployee(employee: Employee): Observable<Employee> {
    return this.httpclient.put<Employee>(this.ApiUrl + employee.id, employee);
  }

  deleteEmployee(id: number): Observable<Employee> {
    return this.httpclient.delete<Employee>(this.ApiUrl + id);
  }


}
