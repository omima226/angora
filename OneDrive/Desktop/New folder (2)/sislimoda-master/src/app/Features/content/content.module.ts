import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentRoutingModule } from './content-routing.module';
import { ContentsComponent } from './Components/contents/contents.component';
import { DropdownComponent } from './Components/dropdown/dropdown.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    ContentsComponent,
    DropdownComponent
  ],
  imports: [
    CommonModule,
    ContentRoutingModule,
    MatSlideToggleModule,
    SharedModule
  ]
})
export class ContentModule { }
