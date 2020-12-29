import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SubmitOrder } from './submit-order';

@Injectable({
  providedIn: 'root'
})
export class SubmitOrderService {
  private baseURL = "http://localhost:8080/api/submit";

  constructor(private httpClient: HttpClient) { }

  submitOrder(order: SubmitOrder): Observable<Object>{
    console.log("Submit Order")
    console.log(order);
    return this.httpClient.post(`${this.baseURL}`,order);
  }
}
