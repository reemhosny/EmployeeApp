import { AuthService } from './../service/auth-service.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

 
export class AuthGuard implements CanActivate {
  constructor(private _authService: AuthService, private _router: Router) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
 
    var userName = this._authService.getUserName();
    if (userName != null && userName != "")
    {
      return true;
    }
    else
    {
      this._router.navigate(['/login'], {
        queryParams: {
          returnUrl: state.url
        }
      });
      return false;
    }
  }
}