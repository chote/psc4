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

@NgModule({
  imports: [
    CommonModule, ProcureRoutingModule, PscShareModule
  ],
  declarations: [ LabofficeComponent, LabprocureComponent, ProcureComponent, LabprocureAddComponent, LabofficeAddComponent]
})
export class ProcureModule { }
