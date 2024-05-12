import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';

export const httpInterceptor: HttpInterceptorFn = (req, next) => {
  const router: Router = inject(Router);
  let authToken = '';
  if(!req.url.includes('login') || !req.url.includes('signup') || !req.url.includes('forgetPassword')){
    authToken = localStorage.getItem('token');
  }
  const authreq = req.clone({
    setHeaders : {
      authorization : `Bearer ${authToken}`
    }
  })
  return next(authreq).pipe(
    catchError((error: HttpErrorResponse) => {
      if(error .status === 401){
        router.navigate(['/auth/login']);
      }
      return throwError(() => error)
    })
  );
};
