import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SupportRoutingModule } from './support-routing.module';
import { SupportsComponent } from './components/supports/supports.component';
import { TechnicalSupportsComponent } from './components/technical-supports/technical-supports.component';
import { ComplaintsSupportsComponent } from './components/complaints-supports/complaints-supports.component';


@NgModule({
  declarations: [
    SupportsComponent,
    TechnicalSupportsComponent,
    ComplaintsSupportsComponent
  ],
  imports: [
    CommonModule,
    SupportRoutingModule
  ]
})
export class SupportModule { }
