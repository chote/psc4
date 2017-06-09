import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PscShareModule} from '../app/../psc_shared/psc_shared.module';
//import {DataTableModule,SharedModule,DialogModule,ConfirmDialogModule,DropdownModule} from 'primeng/primeng';
import { ProcureRoutingModule } from './procure-routing.module';
import { LabprocureComponent } from './labprocure/labprocure.component';
import { LabofficeComponent } from './laboffice/laboffice.component';
import { ProcureComponent } from './procure.component';
import { LabprocureAddComponent } from './labprocure/labprocure-add.component';
import { LabofficeAddComponent } from './laboffice/laboffice-add.component';
import { ShowproductComponent } from './showproduct/showproduct.component';
import { ProductfilterComponent } from './productfilter/productfilter.component';
import { ProductDashboardComponent } from './product-dashboard/product-dashboard.component';
import { ProductReportComponent } from './product-report/product-report.component';
import { TestComponent } from './test/test.component';
import { ShowbursComponent } from './showburs/showburs.component';

@NgModule({
  imports: [
    CommonModule, ProcureRoutingModule, PscShareModule
  ],
  declarations: [ LabofficeComponent, LabprocureComponent, ProcureComponent, LabprocureAddComponent, LabofficeAddComponent, ShowproductComponent, ProductfilterComponent, ProductDashboardComponent, ProductReportComponent, TestComponent, ShowbursComponent]
})
export class ProcureModule { }
