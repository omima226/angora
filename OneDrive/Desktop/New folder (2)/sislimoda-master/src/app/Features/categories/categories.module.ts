import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesRoutingModule } from './categories-routing.module';
import { CategoryComponent } from './Components/category/category.component';
import { SubCategoryComponent } from './Components/sub-category/sub-category.component';
import { LaptopsComponent } from './Components/sub-category/components/laptops/laptops.component';


@NgModule({
  declarations: [
    CategoryComponent,
    SubCategoryComponent,
    LaptopsComponent
  ],
  imports: [
    CommonModule,
    CategoriesRoutingModule
  ]
})
export class CategoriesModule { }
