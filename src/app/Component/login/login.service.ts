import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, map, throwError } from 'rxjs';
import { routes } from '../../app.routes';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private $isLoggedinUser: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  constructor(private http: HttpClient, private router: Router) {}
  public set setLoggedInUser(val:boolean){
    this.$isLoggedinUser.next(val);
  }
  public get getLoggedInUser(){
    return this.$isLoggedinUser.asObservable();
  }
  login(username: string, password: string) {
    let body = {
      username: username,
      password: password,
    };
    return this.http.post('http://localhost:3000/login', body).pipe(
      map((data) => {
        return data;
      }),
      catchError((err) => {
        return throwError(() => err);
      })
    );
  }
  logout() {
    if (localStorage.getItem('token')) {
      localStorage.removeItem('token');
      this.setLoggedInUser = false;
      this.router.navigate(['/auth/login']);
    } else {
    }
  }
  forgetPasswordUsername(body) {
    let url = `http://localhost:3000/forgetPassword/sendusername`;
    return this.http.post(url, body).pipe(
      map((data) => {
        return data;
      }),
      catchError((err) => {
        return throwError(() => err);
      })
    );
  }
  enternewPassword(body) {
    let url = `http://localhost:3000/forgetPassword/passwordchange`;
    return this.http.post(url, body).pipe(
      map((data) => {
        return data;
      }),
      catchError((err) => {
        return throwError(() => err);
      })
    );
  }
}
