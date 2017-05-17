import { NgModule,ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogModule,ConfirmationService ,ConfirmDialogModule,DataTableModule,SharedModule,InputTextModule, ButtonModule,DropdownModule }  from 'primeng/primeng';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ProductService } from './psc_server';
import { UserService } from './psc_user.service';
import { BaseComponent } from './psc_base.component';
@NgModule({
    imports: [
    CommonModule
  ],
  declarations: [BaseComponent],
  exports: [
  HttpModule, InputTextModule,FormsModule,DialogModule,  ButtonModule, DataTableModule,SharedModule,ConfirmDialogModule,DropdownModule
  ]
})
export class PscShareModule {

    static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [ProductService, UserService,ConfirmationService]
    };
  }
 }
