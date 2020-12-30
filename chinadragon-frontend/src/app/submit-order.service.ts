import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SubmitOrder } from './submit-order';

@Injectable({
  providedIn: 'root'
})
export class SubmitOrderService {
  submitedOrderId: any;

  private baseURL = "http://localhost:8080/api/submit";

  constructor(private httpClient: HttpClient) { }

  submitOrder(order: SubmitOrder): Observable<any>{
    return this.httpClient.post(`${this.baseURL}`,order);
  }

  getSubmitOrderById(): Observable<any>{
    return this.httpClient.get(`${this.baseURL}/${this.submitedOrderId}`);
  }

  cleanCart(){
    return this.httpClient.delete(`${this.baseURL}`)
  }
}
