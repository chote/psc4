import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProcureComponent } from './psc/psc_procure/procure.component';
const routes: Routes = [
  { path: '', redirectTo: '/procure', pathMatch: 'full' },
  { path: 'procure', component: ProcureComponent },
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
// theorigin