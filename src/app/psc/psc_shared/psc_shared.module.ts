import { NgModule,ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelModule,DialogModule,ConfirmationService ,ConfirmDialogModule,DataTableModule,SharedModule,InputTextModule, ButtonModule,DropdownModule,ChartModule }  from 'primeng/primeng';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ChartModule as HighChartModule } from 'angular2-highcharts';
import {MdCardModule,MdButtonModule, MdCheckboxModule,MaterialModule, MdNativeDateModule} from '@angular/material';
import { ProductService } from './psc_server';
import { UserService } from './psc_user.service';
import { BaseComponent } from './psc_base.component';
import { HighchartsStatic } from 'angular2-highcharts/dist/HighchartsService';
import * as highcharts from 'highcharts';
@NgModule({
    imports: [
    CommonModule,MdCardModule,MdButtonModule, MdCheckboxModule,MaterialModule, MdNativeDateModule , HighChartModule,ChartModule
  ],
  declarations: [BaseComponent],
  exports: [
  HttpModule, InputTextModule,FormsModule,DialogModule,  ButtonModule,PanelModule, DataTableModule,SharedModule,ConfirmDialogModule,DropdownModule
, MdCardModule,MdButtonModule, MdCheckboxModule ,MaterialModule, MdNativeDateModule, ChartModule,HighChartModule]
})
export class PscShareModule {

    static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [ProductService, UserService, ConfirmationService,
        {provide:HighchartsStatic,useValue:highcharts}]
    };
  }
 }
