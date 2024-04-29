import { HttpBackend, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private http:HttpClient) { }

  signupNewUser(firstname,lastname,email,username,password){
    let body = {
      firstname : firstname,
      lastname : lastname,
      email : email,
      username : username,
      password : password
    }
    return this.http.post('http://localhost:3000/auth/signup',body).pipe(
      map((data)=>{
        return data;
      }),
      catchError((error)=>{
        return throwError(()=> error);
      })
    )
  }
}
