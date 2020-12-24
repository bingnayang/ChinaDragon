import { Component, OnInit } from '@angular/core';
import { OrderOnlineService } from '../app/order-online.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'chinadragon-frontend';
  countItem: number;
  
  constructor(private orderOnlineService: OrderOnlineService ) { }

  ngOnInit(): void {
    this.countCartOrderItem();
  }

  private countCartOrderItem(){
    this.orderOnlineService.countOrderItem().subscribe(data => {
      this.countItem = data;
    },error => console.log(error))
  }

}
