import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Menu } from './menu';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private baseURL = "http://localhost:8080/api/menus";

  constructor(private httpClient: HttpClient) { }

  getMenuList(): Observable<Menu[]>{
    return this.httpClient.get<Menu[]>(`${this.baseURL}`);
  }
}
