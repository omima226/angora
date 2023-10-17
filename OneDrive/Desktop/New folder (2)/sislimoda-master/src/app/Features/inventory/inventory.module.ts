import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InventoryRoutingModule } from './inventory-routing.module';
import { InventoriesComponent } from './Components/inventories/inventories.component';
import { InventoriesDetailsComponent } from './Components/inventories-details/inventories-details.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AddInventoryComponent } from './Components/add-inventory/add-inventory.component';
import { UpdateInventoryComponent } from './Components/update-inventory/update-inventory.component';


@NgModule({
  declarations: [
    InventoriesComponent,
    InventoriesDetailsComponent,
    AddInventoryComponent,
    UpdateInventoryComponent
  ],
  imports: [
    CommonModule,
    InventoryRoutingModule,
    SharedModule
  ]
})
export class InventoryModule { }
