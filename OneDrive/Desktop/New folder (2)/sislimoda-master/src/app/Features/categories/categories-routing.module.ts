import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './Components/category/category.component';
import { SubCategoryComponent } from './Components/sub-category/sub-category.component';
import { LaptopsComponent } from './Components/sub-category/components/laptops/laptops.component';

const routes: Routes = [
  { path: '', redirectTo: 'category', pathMatch: 'full' },
  { path: 'category', component: CategoryComponent },
  { path: 'subCategory', component: SubCategoryComponent },
  { path: 'subCategory/:id', component: LaptopsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriesRoutingModule { }
