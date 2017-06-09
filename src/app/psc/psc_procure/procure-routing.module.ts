import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProcureComponent } from './procure.component';
import { LabofficeComponent } from './laboffice/laboffice.component';
import { LabprocureComponent } from './labprocure/labprocure.component';
import { LabprocureAddComponent } from './labprocure/labprocure-add.component';
//import { HeroesComponent }      from './heroes.component';
//import { HeroDetailComponent }  from './hero-detail.component';
import { ShowproductComponent } from './showproduct/showproduct.component';
import { ProductfilterComponent } from './productfilter/productfilter.component';
import { ProductDashboardComponent } from './product-dashboard/product-dashboard.component';
import { ProductReportComponent } from './product-report/product-report.component';
import { ShowbursComponent } from './showburs/showburs.component';
const routes: Routes = [
 
  {
    path: 'procure', component: ProcureComponent,
 children: [
      { path: 'labprocure', component: LabprocureComponent },
      { path: 'labprocureAdd', component: LabprocureAddComponent },
      { path: 'laboffice', component: LabofficeComponent },
      { path: 'laboffice', component: LabofficeComponent },
      { path: 'showproduct', component: ShowproductComponent },
      { path: 'productfilter', component: ProductfilterComponent },
     { path: 'productdashboard', component: ProductDashboardComponent },
     { path: 'productreport', component: ProductReportComponent },
       { path: 'showburs', component:  ShowbursComponent},
       { path: '', component: LabprocureComponent }
    ]
  },
   { path: '', redirectTo: '/procure', pathMatch: 'full' },
 //  { path: 'test',  component: TestComponent },
 // { path: 'detail/:id', component: HeroDetailComponent },
 // { path: 'heroes',     component: HeroesComponent }
];
@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class ProcureRoutingModule {}
