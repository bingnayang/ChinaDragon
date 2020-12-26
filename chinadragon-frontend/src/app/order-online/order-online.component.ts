import { Component, OnInit } from '@angular/core';
import { Menu } from '../menu';
import { MenuService } from '../menu.service';
import { CartOrder } from '../cart-order';
import { OrderOnlineService } from '../order-online.service';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-order-online',
  templateUrl: './order-online.component.html',
  styleUrls: ['./order-online.component.css']
})
export class OrderOnlineComponent implements OnInit {
  menuItems: Menu[];
  order: CartOrder = new CartOrder();
  item: CartOrder = new CartOrder();
  checkItemId: number;

  constructor(private menuService: MenuService, private orderOnlineService: OrderOnlineService, private header: AppComponent) { }

  ngOnInit(): void {
    this.getMenuList();
    this.header.ngOnInit();
  }

  private getMenuList() {
    this.menuService.getMenuList().subscribe(data => {
      this.menuItems = data;
      console.log(this.menuItems);
    }, error => console.log(error));
  }

  addToCart(sectionName: string, name: string, size: string, price: number) {
    this.order.section = sectionName;
    this.order.name = name;
    this.order.size = size;
    this.order.price = price;
    this.order.quantity = 1;

    this.orderOnlineService.checkItem(name, size).subscribe(data => {
      this.checkItemId = data;

      if (this.checkItemId != -1) {
        console.log("Item in cart,increase quantity")
        this.updateOrderItemQuantity(this.checkItemId);

      } else {
        this.submitToCart();
        console.log("Item add to cart")
      }
    })
  }

  submitToCart() {
    this.orderOnlineService.addToCart(this.order).subscribe(data => {
      this.ngOnInit();
    })
  }

  updateOrderItemQuantity(itemId: number){
    this.orderOnlineService.getItemById(itemId).subscribe(data => {
      this.item = data;
      this.orderOnlineService.increaseItemQuantity(this.item).subscribe(data => {
        this.ngOnInit();
      }, error => console.log(error))
    }, error => console.log(error))
  }


}
