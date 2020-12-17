import { Component, OnInit } from '@angular/core';
import { Menu } from '../menu';
import { MenuService } from '../menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
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
