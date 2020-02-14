import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { Router } from '@angular/router';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";


import {EmployeeService} from "../../../service/employee.service";
import {Employee,EmployeeOutput} from "../../../model/employee";


@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']

})
export class EditEmployeeComponent implements OnInit {

  editForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
  			  private router: Router, 
  			  private employeeService: EmployeeService) { }



  ngOnInit() {
  	this.editForm = this.formBuilder.group({
      id: [],
      employee_name: ['', Validators.required],
      password: ['', Validators.required],
      employee_age: ['', Validators.required],
      employee_salary: ['', Validators.required]
    });
  }

  onSubmit() {
    this.employeeService.updateEmployee(this.editForm.value)
      .subscribe( data => {
        this.router.navigate(['list-employee']);
      });
  }       


}
