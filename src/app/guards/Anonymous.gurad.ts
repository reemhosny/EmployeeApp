import { AuthService } from './../service/auth-service.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class Anonymous implements CanActivate {
  constructor(private _authService: AuthService, private _router: Router) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
 
    var userName = this._authService.getUserName();
    if (userName != null && userName != "")
    {
      this._router.navigate(['/list-employee']);
    }
    else
    {     
      return true
    }
  }
}
