import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { Router } from '@angular/router';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";


import {EmployeeService} from "../../../service/employee.service";
import {Employee,EmployeeOutput} from "../../../model/employee";

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent implements OnInit {

  employees: Employee[] = [];
  employee: Employee;
  message: string;
  showError:boolean=false;


  constructor(private employeeService: EmployeeService,
    		  private router: Router) { }

  ngOnInit() {
  	this.getAllEmployees;
  }

  getAllEmployees() {
    this.employees = [];
    this.employeeService.getEmployees().subscribe((response: EmployeeOutput<Employee[]>) => {
      console.log(response)
      this.employees = response.data;
    });
  };


  deleteEmployee(employee: Employee): void {
    this.employeeService.deleteEmployee(employee.id)
      .subscribe(data => {
        if (data.status != "success") {
          this.message = data.message;
          this.showErrorMessage();

        } else {
          this.employees = this.employees.filter(u => u !== id);

        }
      })
  };
  
  showErrorMessage() {
    this.showError = true;
    setTimeout(() => {
      this.showError = false;
    }, 5000);
  }

  editEmployee(employee: Employee): void {
    window.localStorage.removeItem("editemployeeId");
    window.localStorage.setItem("editEmployeeId", employee.id.toString());
    this.router.navigate(['edit-employee']);
  };

  addEmployee(): void {
    this.router.navigate(['add-employee']);
  }



}
