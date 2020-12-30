import { Component, Input, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { SubmitOrder } from '../submit-order';
import { SubmitOrderService } from '../submit-order.service';
@Component({
  selector: 'app-confirmation-page',
  templateUrl: './confirmation-page.component.html',
  styleUrls: ['./confirmation-page.component.css']
})
export class ConfirmationPageComponent implements OnInit {
  submitedOrder: SubmitOrder;

  constructor(private header: AppComponent, private submitOrderService: SubmitOrderService) { }

  ngOnInit(): void {
    this.submitOrderService.cleanCart();
    this.header.ngOnInit();
    this.getSubmitOrderDetail();
  }

  private getSubmitOrderDetail(){
    this.submitOrderService.getSubmitOrderById(this.submitOrderService.submitedOrderId).subscribe(data => {
      this.submitedOrder = data;
      console.log(this.submitedOrder);
    },error => console.log(error))
  }
}
