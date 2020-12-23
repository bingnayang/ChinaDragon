import { Component, OnInit } from '@angular/core';
import { CartOrder } from '../cart-order';
import { OrderOnlineService } from '../order-online.service';


@Component({
  selector: 'app-cart-order',
  templateUrl: './cart-order.component.html',
  styleUrls: ['./cart-order.component.css']
})
export class CartOrderComponent implements OnInit {
  orderList: CartOrder[];
  countItem: number;

  constructor(private orderOnlineService: OrderOnlineService ) { }

  ngOnInit(): void {
    this.getCartOrderList();
    // this.countCartOrderItem();
    this.orderOnlineService.countOrderItem().subscribe(data => {
      this.countItem = data;
      console.log(this.countItem)
    },error => console.log(error))
  }

  private getCartOrderList(){
    this.orderOnlineService.getCartOrder().subscribe(data => {
      this.orderList = data;
      console.log(this.orderList);
    },error => console.log(error))
  }

  private countCartOrderItem(){
    this.orderOnlineService.countOrderItem().subscribe(data => {
      this.countItem = data;
      console.log(this.countItem)
    },error => console.log(error))
  }

}
