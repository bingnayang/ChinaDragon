import { Component, OnInit } from '@angular/core';
import { Menu } from '../menu';
import { MenuService } from '../menu.service';
import { OrderList } from '../order-list';

@Component({
  selector: 'app-order-online',
  templateUrl: './order-online.component.html',
  styleUrls: ['./order-online.component.css']
})
export class OrderOnlineComponent implements OnInit {
  menuItems: Menu[];
  order: OrderList = new OrderList();
  orderList: OrderList[] = [];

  constructor(private menuService: MenuService) { }

  ngOnInit(): void {
    this.getMenuList();
  }

  private getMenuList(){
    this.menuService.getMenuList().subscribe(data => {
      this.menuItems = data;
      console.log(this.menuItems);
    },error => console.log(error));
  }

  addToCart(sectionName: string, name: string, size: string, price: number){
    this.order.section = sectionName;
    this.order.name = name;
    this.order.size = size;
    this.order.price = price;

    console.log(this.order)
    this.orderList.push(this.order)

  }
  

}
