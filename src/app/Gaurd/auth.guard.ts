import { Injectable } from '@angular/core';
import  { CanActivateFn, Router } from '@angular/router';
import { LoginService } from '../Component/login/login.service';
import { routes } from '../app.routes';

@Injectable({
  providedIn:'root',
})
export class authGuard{
  loggedinToken:boolean = false;
  constructor(private login : LoginService,private router:Router){}
  canActivate:CanActivateFn = (route, state) => {
     if(localStorage.getItem('token')){
      this.loggedinToken = Boolean(localStorage.getItem('token'));
     }
      if(this.loggedinToken === true){
        return true;
      }
        this.router.navigate(['/login']);
        return false;

  };
}
