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
  pickUpOption: any;
  pickUpTimeSelected: boolean;
  selectedTime: any;

  constructor(private orderOnlineService: OrderOnlineService, private submitOrderService: SubmitOrderService, private router: Router) { }

  ngOnInit(): void {
    this.getCartOrderList();
    this.getCartOrderSubTotal();
    this.getTaxAmount();
    this.getOrderTotal();
  }

  backToCart() {
    this.router.navigate(['cart']);
  }

  onSubmit() {
    this.orderDetail.name = this.orderDetail.name[0].toUpperCase() + this.orderDetail.name.slice(1);
    this.orderDetail.subtotal = this.orderSubTotal;
    this.orderDetail.tax = this.orderTax;
    this.orderDetail.total = this.orderTotal;
    this.orderDetail.status = "Active"
    this.orderDetail.date = formatDate(this.currentDateTime, 'yyyy-MM-dd', 'en-US');
    this.orderDetail.time = formatDate(this.currentDateTime, 'hh:mm a', 'en-US');
    
    if(this.pickUpTimeSelected){
      this.orderDetail.pickup = this.selectedTime;
    }else{
      this.orderDetail.pickup = "ASAP";
    }

    // Remove the id
    this.orderItemList.forEach(u => delete u.id);
    this.orderDetail.orderItem = this.orderItemList;

    this.submitOrder();
  }

  private submitOrder() {
    this.submitOrderService.submitOrder(this.orderDetail).subscribe(data => {
      this.submitOrderService.submitedOrderId = data;
      this.router.navigate(['comfirmation']);
    });
  }

  private getCartOrderList() {
    this.orderOnlineService.getCartOrder().subscribe(data => {
      this.orderItemList = data;
    }, error => console.log(error))
  }

  private getCartOrderSubTotal() {
    this.orderOnlineService.calculateSubTotal().subscribe(data => {
      this.orderSubTotal = data;
    }, error => console.log(error))
  }

  private getOrderTotal() {
    this.orderOnlineService.calculateSubTotal().subscribe(data => {
      this.orderTotal = data + (data * 0.08);
    }, error => console.log(error))
  }

  private getTaxAmount() {
    this.orderOnlineService.calculateSubTotal().subscribe(data => {
      this.orderTax = data * 0.08;
    }, error => console.log(error))
  }

  onItemChange(value) {
    if (value == 'select-time') {
      this.pickUpTimeSelected = true;
    } else {
      this.pickUpTimeSelected = false;
    }
  }

  onTimeChange(selectTime) {
    this.orderDetail.pickup = selectTime;
  }
}
