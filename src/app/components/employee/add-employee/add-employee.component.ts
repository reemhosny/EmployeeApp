import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { Router } from '@angular/router';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";


import {EmployeeService} from "../../../service/employee.service";
import {Employee,EmployeeOutput} from "../../../model/employee";

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  addForm: FormGroup;
  employees:Employee[];
  constructor(private formBuilder: FormBuilder,
  			  private router: Router, 
  			  private employeeService: EmployeeService) {
            this.employees = JSON.parse(localStorage.getItem("Employees"));
    
           }



  ngOnInit() {
  	this.addForm = this.formBuilder.group({
      id: [],
      employee_name: ['', Validators.required],
      employee_age: ['', Validators.required],
      employee_salary: ['', Validators.required]
    });
  }

  onSubmit() {
    var model  = <Employee>this.addForm.value;
    this.employeeService.createEmployee(model)
      .subscribe( result=> {
        model.id  = result.data.id;
        this.employees.push(model) ;
        localStorage.setItem("Employees" , JSON.stringify(this.employees));
        this.router.navigate(['list-employee']);
      });
  }       

}
