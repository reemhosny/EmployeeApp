import { AuthService } from './../service/auth-service.service';
import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class TokenInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService,
    private _router: Router) { }

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler): Observable<HttpEvent<any>> {

    const token = this.authService.getUserToken();;
    if (token) {    
        request = request.clone({
          setHeaders: {
            Authorization: `Bearer ${token}`,
          },
          body: { ...request.body }
        });      
    }
    else {
      request = request.clone({
        body: { ...request.body }
      });
    }

    return next.handle(request).pipe(
      tap((event: any) => {
        if (event.type != 0 && event.body != null && event.body.errorCode != null && event.body.errorCode != 1)
          console.log("this is response", event);
      },
        error => {
          if (error.status === 401) {
            this.authService.logout();
            this._router.navigate(['/login']);
          }
          else {
            throw error;
          }
          if (event instanceof HttpResponse) {
            console.log('api call error :', event);
          }
        }
      )
    );
  }


}
