import { Component, OnInit } from '@angular/core';
import { Menu } from '../menu';
import { MenuService } from '../menu.service';
import { CartOrder } from '../cart-order';
import { OrderOnlineService } from '../order-online.service';

@Component({
  selector: 'app-order-online',
  templateUrl: './order-online.component.html',
  styleUrls: ['./order-online.component.css']
})
export class OrderOnlineComponent implements OnInit {
  menuItems: Menu[];
  order: CartOrder = new CartOrder();

  constructor(private menuService: MenuService, private orderOnlineService: OrderOnlineService) { }

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
    this.submitToCart();
  }

  submitToCart(){
    this.orderOnlineService.addToCart(this.order).subscribe(data => {
      console.log(data);
    })
  }



}
