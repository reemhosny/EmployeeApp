import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import {Router} from "@angular/router";

import {Employee} from "../../model/employee";
import {EmployeeService} from "../../service/employee.service";

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent implements OnInit {

employees: Employee[];

employee: Employee;


  constructor(private router: Router, private employeeService: EmployeeService) { }

  ngOnInit() {

    //if(!window.localStorage.getItem('token')) {
      //this.router.navigate(['login']);
      //return;
      //}

    this.getAllEmployees();
  

}

getAllEmployees(){
this.employeeService.getEmployees()
    .subscribe( response => {
      console.log(response);
      this.employees = response;
      });
  };                                                             


  deleteEmployee(employee: Employee): void {
    this.employeeService.deleteEmployee(employee.data.id)
      .subscribe( data => {
        this.employees = this.employees.filter(u => u !== employee);
      })
  };

  editEmployee(employee: Employee): void {
    window.localStorage.removeItem("editEmployeeId");
    window.localStorage.setItem("editEmployeeId", employee.data.id.toString());
    this.router.navigate(['edit-employee']);
  };

  addEmployee(): void {
    this.router.navigate(['add-employee']);
  }    


}                                               

