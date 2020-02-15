import { EmployeeOutput, DeleteOutput } from './../model/employee';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';


import { Employee } from "../model/employee";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {


  ApiUrl = "http://dummy.restapiexample.com/api/v1/employees";
  deleteUrl = "http://dummy.restapiexample.com/api/v1/delete/";
  createUrl = "http://dummy.restapiexample.com/api/v1/create";
  updateUrl = "http://dummy.restapiexample.com/api/v1/update/";
  getUrl = "http://dummy.restapiexample.com/api/v1/employee/";

  constructor(private httpclient: HttpClient) { }

  private employee = new BehaviorSubject<Employee>(new Employee());
  currentEmployee = this.employee.asObservable();

  ChangeEmployee(Message) {
    this.employee.next(Message);
  }

   getEmployees(): Observable<EmployeeOutput<Employee[]>> {
    return this.httpclient.get<EmployeeOutput<Employee[]>>(this.ApiUrl);
  }

  getEmployeeById(id): Observable<EmployeeOutput<Employee>> {
    return this.httpclient.get<EmployeeOutput<Employee>>(this.getUrl + id);
  }

  createEmployee(employee: Employee): Observable<EmployeeOutput< Employee>> {
    return this.httpclient.post<EmployeeOutput<Employee>>(this.createUrl, employee);
  }

  updateEmployee(employee: Employee): Observable<EmployeeOutput< Employee>> {
    return this.httpclient.put<EmployeeOutput< Employee>>(this.updateUrl + employee.id, employee);
  }

  deleteEmployee(id: number): Observable<DeleteOutput> {
    return this.httpclient.delete<DeleteOutput>(this.deleteUrl + id , {});
  }


}
