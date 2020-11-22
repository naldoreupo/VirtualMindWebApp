import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { Purchase } from '../store/models/purchase';

@Injectable({
  providedIn: 'root'
})
export class PurchaseService {

  private readonly URL = 'https://localhost:44342/api/Purchase';
  
  constructor(private http: HttpClient) { }

  save(purchase): Observable<any> {
    const headers =  {headers : new  HttpHeaders({'Content-Type': 'application/json'})};
    return this.http.post(this.URL,purchase,headers);
  }
}
