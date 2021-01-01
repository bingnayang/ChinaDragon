import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { CartOrder } from '../cart-order';
import { OrderOnlineService } from '../order-online.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart-order',
  templateUrl: './cart-order.component.html',
  styleUrls: ['./cart-order.component.css']
})
export class CartOrderComponent implements OnInit {
  orderList: CartOrder[];
  item: CartOrder = new CartOrder();
  countItem: number;
  orderSubTotal: any;
  orderTotal: any;
  orderTax: any;

  constructor(private orderOnlineService: OrderOnlineService, private header: AppComponent, private router: Router ) { }

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

  increaseQuantity(id: number){
    this.orderOnlineService.getItemById(id).subscribe(data => {
      this.item = data;
      console.log("increase quantity")
      console.log(this.item)
      this.orderOnlineService.increaseItemQuantity(this.item).subscribe(data =>{
        this.ngOnInit();
      })
    })
  }

  decreaseQuantity(id: number){
    this.orderOnlineService.getItemById(id).subscribe(data => {
      this.item = data;

      if(this.item.quantity == 1){
        this.deleteOrderItem(id);
      }else{
        this.orderOnlineService.decreaseItemQuantity(this.item).subscribe(data =>{
          this.ngOnInit();
        })
      }
    })
  }

  checkOut(){
    this.router.navigate(['check-out']);
  }

  startOrder(){
    this.router.navigate(['order-online']);
  }
}
