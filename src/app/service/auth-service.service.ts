import { Injectable } from '@angular/core'; 
import { BehaviorSubject } from 'rxjs';
import { Router } from "@angular/router";

import { IUserToken } from '../model/user-token.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  _localStorageUserTokenKey = 'userToken';
  _localStorageUserName = 'userName';
  currentUser$ = new BehaviorSubject(this.getUserToken());
  constructor(private router: Router) {
  }  

  getUserToken(): IUserToken {

    if (localStorage) {
      return JSON.parse(localStorage.getItem(this._localStorageUserTokenKey)) as IUserToken;
    } else {
      return null;
    }
  }

  setUserToken(userToken: any): void {
    if (localStorage) {
      var token = JSON.stringify(userToken);
      localStorage[this._localStorageUserTokenKey] = token;
      this.currentUser$.next(userToken);
    }
  }

  deleteToken() {   
    localStorage.removeItem(this._localStorageUserTokenKey);

  }
  deleteUser() { 
    localStorage.removeItem(this._localStorageUserName);
  }
  getUserName() {   
    return localStorage.getItem(this._localStorageUserName);
  }
  setUserName(userName) { 
    localStorage.setItem(this._localStorageUserName, userName);
    this.currentUser$.next(userName);
  }


 //LogIn Method
 
 isLoggedIn() {
    return this.getUserToken() !== null;
  }


//Logout Method

   logout() {
    this.deleteToken();
    this.deleteUser();
    this.currentUser$.next(null);
    this.router.navigate(['/login']);
  }


}
