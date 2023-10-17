import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InventoriesComponent } from './Components/inventories/inventories.component';
import { InventoriesDetailsComponent } from './Components/inventories-details/inventories-details.component';
import { AddInventoryComponent } from './Components/add-inventory/add-inventory.component';
import { UpdateInventoryComponent } from './Components/update-inventory/update-inventory.component';

const routes: Routes = [

  { path: '', redirectTo: 'invatories', pathMatch: 'full' },
  { path: 'invatories', component: InventoriesComponent },
  { path: 'invatories/details', component: InventoriesDetailsComponent },
  { path: 'invatories/add', component: AddInventoryComponent },
  { path: 'invatories/update', component: UpdateInventoryComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InventoryRoutingModule { }
