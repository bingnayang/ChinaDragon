import { Component, OnInit } from '@angular/core';
import { OrderOnlineService } from '../order-online.service';
import { CartOrder } from '../cart-order';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit {
  orderItemList: CartOrder[];
  orderSubTotal: any;
  orderTotal: any;
  orderTax: any;

  constructor(private orderOnlineService: OrderOnlineService) { }

  ngOnInit(): void {
    this.getCartOrderList();
    this.getCartOrderSubTotal();
    this.getTaxAmount();
    this.getOrderTotal();
  }

  private getCartOrderList(){
    this.orderOnlineService.getCartOrder().subscribe(data => {
      this.orderItemList = data;
    },error => console.log(error))
  }

  private getCartOrderSubTotal(){
    this.orderOnlineService.calculateSubTotal().subscribe(data => {
      this.orderSubTotal = data;
    },error => console.log(error))
  }

  private getOrderTotal(){
    this.orderOnlineService.calculateSubTotal().subscribe(data => {
      this.orderTotal = data+(data * 0.08);
    },error => console.log(error))
  }

  private getTaxAmount(){
    this.orderOnlineService.calculateSubTotal().subscribe(data => {
      this.orderTax = data * 0.08;
      console.log(this.orderTax)
    },error => console.log(error))
  }
}