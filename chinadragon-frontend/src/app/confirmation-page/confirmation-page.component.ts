import { Component, Input, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { SubmitOrder } from '../submit-order';
import { SubmitOrderService } from '../submit-order.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirmation-page',
  templateUrl: './confirmation-page.component.html',
  styleUrls: ['./confirmation-page.component.css']
})
export class ConfirmationPageComponent implements OnInit {
  submitedOrder: SubmitOrder;

  constructor(private header: AppComponent, private submitOrderService: SubmitOrderService, private router: Router) {
  }

  ngOnInit(): void {
    if(this.submitOrderService.submitedOrderId == undefined){
      this.backToHome();
    }else{
      this.submitOrderService.cleanCart().subscribe(data => {
        console.log("Cart Clean")
      });
      this.getSubmitOrderDetail();
    }
  }

  private getSubmitOrderDetail() {
    this.submitOrderService.getSubmitOrderById().subscribe(data => {
      this.submitedOrder = data;
      this.header.ngOnInit();
      console.log(this.submitedOrder);
    }, error => console.log(error))
  }
  
  backToHome(){
    this.router.navigate(['home']);
  }
}
