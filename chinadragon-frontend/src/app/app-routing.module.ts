import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { OrderOnlineComponent } from './order-online/order-online.component';
import { CartOrderComponent } from '../app/cart-order/cart-order.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'menu', component: MenuComponent},
  {path: 'order-online', component: OrderOnlineComponent},
  {path: 'cart', component: CartOrderComponent},
  {path: '',redirectTo: 'home', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
