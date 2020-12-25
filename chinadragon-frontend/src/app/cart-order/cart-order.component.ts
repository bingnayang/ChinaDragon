import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
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
  orderSubTotal: any;
  orderTotal: any;
  orderTax: any;

  constructor(private orderOnlineService: OrderOnlineService, private header: AppComponent ) { }

  ngOnInit(): void {
    this.getCartOrderList();
    this.countCartOrderItem();
    this.getCartOrderSubTotal();
    this.getOrderTotal();
    this.getTaxAmount();
    this.header.ngOnInit();
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
      console.log(this.orderTotal)
    },error => console.log(error))
  }

  private getTaxAmount(){
    this.orderOnlineService.calculateSubTotal().subscribe(data => {
      this.orderTax = data * 0.08;
      console.log(this.orderTax)
    },error => console.log(error))
  }

  deleteOrderItem(id: number){
    console.log(id)
    this.orderOnlineService.deleteItem(id).subscribe(data => {
      this.ngOnInit();
    });
  }
}
