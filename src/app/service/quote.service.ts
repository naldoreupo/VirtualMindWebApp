import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {

  private readonly baseURL = 'https://localhost:44342/api/Quote';
  
  constructor(private http: HttpClient) { } 
  
  get(CurrencyCode : string): Observable<any> {
    let url = `${this.baseURL}/${CurrencyCode}`;
    return this.http.get(url);
  }

  getAll(): Observable<any> {    
    let url = `${this.baseURL}/GetAll`;
    return this.http.get<any>(url);
  }
}
