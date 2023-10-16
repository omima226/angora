import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './Core/Components/not-found/not-found.component';
import { AuthGuard } from './Features/auth/Guards/auth.guard';
import { logoutGuard } from './Features/auth/Guards/logout.guard';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'auth', title: 'Sislimoda (Auth)', canActivate: [logoutGuard], loadChildren: () => import('./Features/auth/auth.module').then((m) => m.AuthModule) },
  { path: 'dashboard', title: 'Sislimoda (Dashboard)', canActivate: [AuthGuard], loadChildren: () => import('./Features/dashboard/dashboard.module').then((m) => m.DashboardModule) },
  { path: 'product', title: 'Sislimoda (Products)', canActivate: [AuthGuard], loadChildren: () => import('./Features/product/product.module').then((m) => m.ProductModule) },
  { path: 'vendor', title: 'Sislimoda (Vendors)', canActivate: [AuthGuard], loadChildren: () => import('./Features/vendor/vendor.module').then((m) => m.VendorModule) },
  { path: 'inventory', title: 'Sislimoda (Inventory)', canActivate: [AuthGuard], loadChildren: () => import('./Features/inventory/inventory.module').then((m) => m.InventoryModule) },
  { path: 'user', title: 'Sislimoda (Users)', canActivate: [AuthGuard], loadChildren: () => import('./Features/user/user.module').then((m) => m.UserModule) },
  { path: 'financial', title: 'Sislimoda (Financial)', canActivate: [AuthGuard], loadChildren: () => import('./Features/financial/financial.module').then((m) => m.FinancialModule) },
  { path: 'content', title: 'Sislimoda (Content)', canActivate: [AuthGuard], loadChildren: () => import('./Features/content/content.module').then((m) => m.ContentModule) },
  { path: 'sales', title: 'Sislimoda (Sales)', canActivate: [AuthGuard], loadChildren: () => import('./Features/sales/sales.module').then((m) => m.SalesModule) },
  { path: 'settings', title: 'Sislimoda (Settings)', canActivate: [AuthGuard], loadChildren: () => import('./Features/settings/settings.module').then((m) => m.SettingsModule) },
  { path: 'order', title: 'Sislimoda (Orders)', canActivate: [AuthGuard], loadChildren: () => import('./Features/orders/orders.module').then((m) => m.OrdersModule) },
  { path: 'category', title: 'Sislimoda (Categories)', canActivate: [AuthGuard], loadChildren: () => import('./Features/categories/categories.module').then((m) => m.CategoriesModule) },
  {path: 'support' , title: 'Sislimoda (Support)', canActivate: [AuthGuard], loadChildren:()=> import('./Features/support/support.module').then((m)=> m.SupportModule)},

  { path: '**', title: 'Not Found', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
