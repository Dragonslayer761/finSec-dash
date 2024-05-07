import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http:HttpClient) { }

  getAllCustomer():Observable<any>{
    let url = ``;
    return this.http.get(url).pipe(
      map(data => data),
      catchError(err => throwError(() => err))
    );
  }
  getSpecificUser(id):Observable<any>{
    let url = ``;
    return this.http.get(url).pipe(
      map(data => data),
      catchError(err => throwError(() => err))
    );
  }
}
