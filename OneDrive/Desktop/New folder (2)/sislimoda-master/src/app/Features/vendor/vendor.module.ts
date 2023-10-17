import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VendorRoutingModule } from './vendor-routing.module';
import { VendorsComponent } from './Components/vendors/vendors.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { VendorDetailsComponent } from './Components/vendors-details/vendors-details.component';


@NgModule({
  declarations: [
    VendorsComponent,
    VendorDetailsComponent
  ],
  imports: [
    CommonModule,
    VendorRoutingModule,
    SharedModule,
    MatSlideToggleModule,
  ],
    exports:[

    VendorRoutingModule,
    SharedModule
  ]
})
export class VendorModule { }
