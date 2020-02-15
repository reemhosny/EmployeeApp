import { Employee } from './../../../model/employee';
import { Component, OnInit, DebugElement } from '@angular/core';
import { Observable } from "rxjs";
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";


import { EmployeeService } from "../../../service/employee.service";
import { EmployeeOutput } from "../../../model/employee";
import { JsonPipe } from '@angular/common';


@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']

})
export class EditEmployeeComponent implements OnInit {

  editForm: FormGroup;
  emp_id: any;
  CurrentEmployee: Employee;
  employees: Employee[];
  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private employeeService: EmployeeService) {
    this.activatedRoute.queryParams.subscribe((res) => {
      this.emp_id = res.Id;
      this.employees = JSON.parse(localStorage.getItem("Employees"));
      var index = this.employees.indexOf(this.employees.filter(x => x.id == this.emp_id)[0])
      this.CurrentEmployee = this.employees[index];
      this.createForm(this.CurrentEmployee);

    });
  }


  createForm(employee: Employee) {
    this.editForm = this.formBuilder.group({
      id: [employee.id],
      employee_name: [employee.employee_name, Validators.required],
      employee_age: [employee.employee_age, Validators.required],
      employee_salary: [employee.employee_salary, Validators.required]
    });
  }

  ngOnInit() {
  }


  onSubmit() {
    var model = <Employee>this.editForm.value;
    this.employeeService.updateEmployee(model)
      .subscribe(data => {
        if (data.status == "success") {
          var index = this.employees.indexOf(this.employees.filter(x => x.id == this.CurrentEmployee.id)[0])
          this.employees[index] = model;
          localStorage.setItem("Employees", JSON.stringify(this.employees));
          this.router.navigate(['list-employee']);
        }
        else {
        }
      });
  }


}
