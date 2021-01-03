import { Component, OnInit } from '@angular/core';
import { OrderOnlineService } from '../order-online.service';
import { CartOrder } from '../cart-order';
import { Router } from '@angular/router';
import { SubmitOrder } from '../submit-order';
import { SubmitOrderService } from '../submit-order.service';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit {
  orderItemList: CartOrder[];
  orderDetail: SubmitOrder = new SubmitOrder();
  orderSubTotal: any;
  orderTotal: any;
  orderTax: any;
  insertId: number;
  currentDateTime: any = new Date();

  constructor(private orderOnlineService: OrderOnlineService,private submitOrderService: SubmitOrderService, private router: Router) { }

  ngOnInit(): void {
    this.getCartOrderList();
    this.getCartOrderSubTotal();
    this.getTaxAmount();
    this.getOrderTotal();
  }

  backToCart(){
    this.router.navigate(['cart']);
  }

  onSubmit(){
    // this.currentDateTime = new Date();

    this.orderDetail.subtotal = this.orderSubTotal;
    this.orderDetail.tax = this.orderTax;
    this.orderDetail.total = this.orderTotal;
    this.orderDetail.pickup = "ASAP";
    this.orderDetail.status = "Active"
    this.orderDetail.date = formatDate(this.currentDateTime, 'yyyy-MM-dd','en-US');
    this.orderDetail.time = formatDate(this.currentDateTime, 'hh:mm a','en-US');

    // Remove the id
    this.orderItemList.forEach(u => delete u.id);

    this.orderDetail.orderItem = this.orderItemList;
    this.submitOrder();
  }

  private submitOrder(){
    this.submitOrderService.submitOrder(this.orderDetail).subscribe(data => {
      this.submitOrderService.submitedOrderId = data;
      this.router.navigate(['comfirmation']);
    });
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
