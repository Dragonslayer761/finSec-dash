import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient) { }
  getProfileSetting(){
    return this.http.get('http://localhost:3000/profile').pipe(
      map((data => {
        return data;
      })),
      catchError((error) => {
        return throwError(()=> error);
      })
    )
  }
}
