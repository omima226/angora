import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaymentGetwayComponent } from './components/payment-getway/payment-getway.component';
import { NotificationsComponent } from './components/notifications/notifications.component';

const routes: Routes =[ { path: '', redirectTo: 'settings', pathMatch: 'full' },
{ path: 'settings', component: PaymentGetwayComponent },
{ path: 'settings/:id', component: NotificationsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }
