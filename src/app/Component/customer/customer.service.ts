import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, throwError } from 'rxjs';
import { DataService } from '../../Service/data.service';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http:HttpClient,private dataService : DataService) { }

  getAllCustomer():Observable<any>{
    let url = `http://localhost:3000/api/user/customer`;
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
  addNewCustomer(body){
    let url = `${this.dataService.getBaseURL}/api/user/customer/add`;
    return this.http.post(url,body);
  }
}
