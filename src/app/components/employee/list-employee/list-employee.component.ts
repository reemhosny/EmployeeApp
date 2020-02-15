import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";


import { EmployeeService } from "../../../service/employee.service";
import { Employee, EmployeeOutput } from "../../../model/employee";
import { debug } from 'util';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent implements OnInit {

  employees: Employee[] = [];
  employee: Employee;
  message: string;
  showError: boolean = false;
  showSucces: boolean = false;


  constructor(private employeeService: EmployeeService,
    private router: Router) { }

  ngOnInit() {
    this.employees = JSON.parse(localStorage.getItem("Employees"));
    if (this.employees == null) {
      this.employees = [];
      this.employeeService.getEmployees().subscribe((response: EmployeeOutput<Employee[]>) => {
        console.log(response)
        this.employees = response.data;
        localStorage.setItem("Employees", JSON.stringify(response.data));
      });
    }
  }

  getAllEmployees() {
    this.employees = [];
    this.employeeService.getEmployees().subscribe((response: EmployeeOutput<Employee[]>) => {
      console.log(response)
      this.employees = response.data;
    });
  };


  deleteEmployee(id) {
    debugger;
    this.employeeService.deleteEmployee(id)
      .subscribe(data => {
        this.employees = this.employees.filter(x => x.id != id);
        localStorage.setItem("Employees", JSON.stringify(this.employees));
        this.showSuccessMessage();
        // if (data.status != "success") {
        //   this.message = data.message;
        //   this.showErrorMessage();
        // } else {
        //   this.employees = this.employees.filter(u => u !== id);

        // }
      })
  };

  showErrorMessage() {
    this.showError = true;
    setTimeout(() => {
      this.showError = false;
    }, 5000);
  }
  showSuccessMessage() {
    this.showSucces = true;
    setTimeout(() => {
      this.showSucces = false;
    }, 5000);
  }
  editEmployee(employee): void {
    this.employeeService.ChangeEmployee(employee);
    this.router.navigate(['/edit-employee'], {
      queryParams: { Id: employee.id }
    });
  };

  addEmployee(): void {
    this.router.navigate(['/add-employee']);
  }



}
