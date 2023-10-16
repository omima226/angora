import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VendorsComponent } from './Components/vendors/vendors.component';
import { VendorDetailsComponent } from './Components/vendors-details/vendors-details.component';

const routes: Routes = [
  {
    path: '',
    component: VendorsComponent
  },
  {
    path: ':id',
    component: VendorDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VendorRoutingModule { }
