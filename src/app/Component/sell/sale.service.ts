import { HttpClient } from '@angular/common/http';
import { HtmlParser } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SaleService {

  constructor(private http : HttpClient) { }

  getAllProduct():Observable<any>{
    return this.http.get('http://localhost:3000/api/products/category').pipe(
      map((data) => {
        return data
      }),
      catchError((error)=>{
        return throwError(()=> error);
      })
    );
  }
}
