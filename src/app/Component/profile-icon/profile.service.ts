import { DataService } from './../../Service/data.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient,private dataServcice : DataService) { }
  getProfileSetting(){
    return this.http.get(`${this.dataServcice.getBaseURL}/user/profile`).pipe(
      map((data => {
        return data;
      })),
      catchError((error) => {
        return throwError(()=> error);
      })
    )
  }
}
