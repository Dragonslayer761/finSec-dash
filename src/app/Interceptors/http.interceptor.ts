import { HttpInterceptorFn } from '@angular/common/http';

export const httpInterceptor: HttpInterceptorFn = (req, next) => {
  let authToken = '';
  if(!req.url.includes('login') || !req.url.includes('signup') || !req.url.includes('forgetPassword')){
    authToken = localStorage.getItem('token');
  }
  const authreq = req.clone({
    setHeaders : {
      authorization : `Bearer ${authToken}`
    }
  })
  return next(authreq);
};
