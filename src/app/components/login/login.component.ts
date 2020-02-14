import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

import {Employee} from "./../../model/employee";
import { LoginModel } from './../../model/login.model';

import { AuthService } from './../../service/auth-service.service';
import {EmployeeService} from "./../../service/employee.service";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  isSubmitted  =  false;

  constructor(private formBuilder: FormBuilder, 
              private router: Router, 
              private AuthService :AuthService,
  	          private  employeeService: EmployeeService) { }

  ngOnInit() {
  	window.localStorage.removeItem('token');
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.compose([Validators.required])],
      password: ['', Validators.required]
    });
  }

  get formControls() { return this.loginForm.controls; }

  onSubmit() {
    console.log(this.loginForm.value);
    var model  =<LoginModel> this.loginForm.value  ;
    this.isSubmitted = true;
    if(this.loginForm.invalid){
      return;
    }
    this.AuthService.setUserToken(model);
    this.AuthService.setUserName(model.username);
    this.router.navigate(['/list-employee']);
  }

}

                                                                                                                                      

