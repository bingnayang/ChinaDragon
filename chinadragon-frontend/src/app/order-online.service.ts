import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CartOrder } from './cart-order';

@Injectable({
  providedIn: 'root'
})
export class OrderOnlineService {
  private baseURL = "http://localhost:8080/api/cart";
  private baseURL_COUNT = "http://localhost:8080/api/cart/order-item";
  private baseURL_SUBTOTAL = "http://localhost:8080/api/cart/order-subtotal";
  
  constructor(private httpClient: HttpClient) { }

  addToCart(order: CartOrder): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`,order);
  }

  getCartOrder(): Observable<CartOrder[]>{
    return this.httpClient.get<CartOrder[]>(`${this.baseURL}`);
  }

  countOrderItem(){
    return this.httpClient.get<number>(`${this.baseURL_COUNT}`);
  }

  calculateSubTotal(){
    return this.httpClient.get<number>(`${this.baseURL_SUBTOTAL}`);
  }

  checkItem(name: string, size: string){
    return this.httpClient.get<number>(`${this.baseURL}/${name}/${size}`);
  }

  getItemById(id: number): Observable<CartOrder>{
    return this.httpClient.get<CartOrder>(`${this.baseURL}/${id}`);
  }

  increaseItemQuantity(item: CartOrder): Observable<Object>{
    item.quantity++;
    return this.httpClient.put(`${this.baseURL}`, item);
  }
  decreaseItemQuantity(item: CartOrder): Observable<Object>{
    item.quantity--;
    return this.httpClient.put(`${this.baseURL}`, item);
  }

  deleteItem(id: number){
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
