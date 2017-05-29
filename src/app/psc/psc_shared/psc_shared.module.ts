import { NgModule,ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelModule,DialogModule,ConfirmationService ,ConfirmDialogModule,DataTableModule,SharedModule,InputTextModule, ButtonModule,DropdownModule }  from 'primeng/primeng';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ChartModule } from 'angular2-highcharts';
import {MdCardModule,MdButtonModule, MdCheckboxModule,MaterialModule, MdNativeDateModule} from '@angular/material';
import { ProductService } from './psc_server';
import { UserService } from './psc_user.service';
import { BaseComponent } from './psc_base.component';
import { HighchartsStatic } from 'angular2-highcharts/dist/HighchartsService';
import * as highcharts from 'highcharts';
@NgModule({
    imports: [
    CommonModule,MdCardModule,MdButtonModule, MdCheckboxModule,MaterialModule, MdNativeDateModule , ChartModule
  ],
  declarations: [BaseComponent],
  exports: [
  HttpModule, InputTextModule,FormsModule,DialogModule,  ButtonModule,PanelModule, DataTableModule,SharedModule,ConfirmDialogModule,DropdownModule
, MdCardModule,MdButtonModule, MdCheckboxModule ,MaterialModule, MdNativeDateModule, ChartModule]
})
export class PscShareModule {

    static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [ProductService, UserService,ConfirmationService, {
      provide: HighchartsStatic,useValue: highcharts
    }]
    };
  }
 }
