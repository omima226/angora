import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SupportsComponent } from './components/supports/supports.component';
import { TechnicalSupportsComponent } from './components/technical-supports/technical-supports.component';
import { ComplaintsSupportsComponent } from './components/complaints-supports/complaints-supports.component';

const routes: Routes = [{ path: '', redirectTo: 'supports', pathMatch: 'full' },
{ path: 'supports', component: SupportsComponent },
{ path: 'technical', component: TechnicalSupportsComponent },
{ path: 'complaints', component: ComplaintsSupportsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SupportRoutingModule { }
