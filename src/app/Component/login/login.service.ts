import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
isLoggedinUser:boolean =false;
constructor(private http : HttpClient) { }
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

  // signup(name:string,email:string,username:string){
  //   user.push({
  //     userName:username,
  //     passWord : ''
  //   })
  // }
}
