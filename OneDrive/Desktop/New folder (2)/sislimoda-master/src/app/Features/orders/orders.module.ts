import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersRoutingModule } from './orders-routing.module';
import { OrdersComponent } from './Components/orders/orders.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { OrderDetailsComponent } from './Components/order-details/order-details.component';
import { AddOrderComponent } from './Components/add-order/add-order.component';
import { UpdateOrderComponent } from './Components/update-order/update-order.component';


@NgModule({
  declarations: [
    OrdersComponent,
    OrderDetailsComponent,
    AddOrderComponent,
    UpdateOrderComponent
  ],
  imports: [
    CommonModule,
    OrdersRoutingModule,
    SharedModule,
    MatSlideToggleModule,

  ],
  exports: [
    
  ]
})
export class OrdersModule { }
