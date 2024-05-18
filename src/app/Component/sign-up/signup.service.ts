import { HttpBackend, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, throwError } from 'rxjs';
import { DataService } from '../../Service/data.service';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private http:HttpClient,private dataService : DataService) { }

  signupNewUser(firstname,lastname,email,username,password){
    let body = {
      firstname : firstname,
      lastname : lastname,
      email : email,
      username : username,
      password : password
    }
    return this.http.post(`${this.dataService.getBaseURL}/auth/signup`,body).pipe(
      map((data)=>{
        console.log(data);
        return data;
      }),
      catchError((error)=>{
        return throwError(()=> error);
      })
    )
  }
}
