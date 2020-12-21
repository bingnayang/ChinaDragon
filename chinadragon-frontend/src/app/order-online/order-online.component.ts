import { Component, OnInit } from '@angular/core';
import { Menu } from '../menu';
import { MenuService } from '../menu.service';

@Component({
  selector: 'app-order-online',
  templateUrl: './order-online.component.html',
  styleUrls: ['./order-online.component.css']
})
export class OrderOnlineComponent implements OnInit {
  menuItems: Menu[];

  constructor(private menuService: MenuService) { }

  ngOnInit(): void {
    this.getMenuList();
  }

  private getMenuList(){
    this.menuService.getMenuList().subscribe(data => {
      this.menuItems = data;
      console.log(this.menuItems);
    },error => console.log(error));
  }
}
