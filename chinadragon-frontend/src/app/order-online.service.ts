import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CartOrder } from './cart-order';

@Injectable({
  providedIn: 'root'
})
export class OrderOnlineService {
  private baseURL = "http://localhost:8080/api/cart";

  constructor(private httpClient: HttpClient) { }

  addToCart(order: CartOrder): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`,order);
  }
}
