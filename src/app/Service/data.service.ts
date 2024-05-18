import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
  private baseUrl = environment.baseUrl;

  public get getBaseURL(){
    return this.baseUrl;
  }
}
