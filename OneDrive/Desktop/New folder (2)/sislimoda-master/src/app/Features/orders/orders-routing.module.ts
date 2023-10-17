import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrdersComponent } from './Components/orders/orders.component';
import { OrderDetailsComponent } from './Components/order-details/order-details.component';
import { UpdateOrderComponent } from './Components/update-order/update-order.component';
import { AddOrderComponent } from './Components/add-order/add-order.component';

const routes: Routes = [

  { path: '', redirectTo: 'orders', pathMatch: 'full' },
  { path: 'orders', component: OrdersComponent },
  { path: 'orders/details', component: OrderDetailsComponent },
  { path: 'orders/update', component: UpdateOrderComponent},
  { path: 'orders/add', component: AddOrderComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersRoutingModule { }
