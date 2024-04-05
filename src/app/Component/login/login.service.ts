import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, throwError } from 'rxjs';
import { routes } from '../../app.routes';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
isLoggedinUser:boolean =false;
constructor(private http : HttpClient,private router:Router) { }
  login(username:string,password:string){
    let body = {
      username : username,
      password : password
    }
    return this.http.post('http://localhost:3000/login',body).pipe(
      map((data) => {
        return data
      }),
      catchError((err)=>{
        return throwError(()=> err)
      })
    )
  }
  logout(){
    if(localStorage.getItem('token')){
      localStorage.removeItem('token');
      this.isLoggedinUser = false;
      this.router.navigate(['/login'])
    }else{

    }
  }
}
