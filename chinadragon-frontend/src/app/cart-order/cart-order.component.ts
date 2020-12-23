import { Component, OnInit } from '@angular/core';
import { CartOrder } from '../cart-order';
import { OrderOnlineService } from '../order-online.service';


@Component({
  selector: 'app-cart-order',
  templateUrl: './cart-order.component.html',
  styleUrls: ['./cart-order.component.css']
})
export class CartOrderComponent implements OnInit {

  constructor(private orderOnlineService: OrderOnlineService ) { }
  orderList: CartOrder[];

  ngOnInit(): void {
    this.getCartOrderList();
  }

  private getCartOrderList(){
    this.orderOnlineService.getCartOrder().subscribe(data => {
      this.orderList = data;
      console.log(this.orderList);
    },error => console.log(error))
  }

}
