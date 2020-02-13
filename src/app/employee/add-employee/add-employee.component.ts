import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

import {EmployeeService} from "../../service/employee.service";                                              

@Component({
  selector: 'app-add-employee',                                             
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {


  addForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
  			  private router: Router, 
  			  private employeeService: EmployeeService) { }



  ngOnInit() {
  	this.addForm = this.formBuilder.group({
      id: [],
      employee_name: ['', Validators.required],
      password: ['', Validators.required],
      employee_age: ['', Validators.required],
      employee_salary: ['', Validators.required]
    });
  }

  onSubmit() {
    this.employeeService.createEmployee(this.addForm.value)
      .subscribe( data => {
        this.router.navigate(['list-employee']);
      });
  }                                                            

}
