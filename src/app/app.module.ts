import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

//import {Dataservice} from './psc_psc_shared/dataservice';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import {PscShareModule } from './psc/psc_shared/psc_shared.module';
//import { DashboardComponent } from './dashboard/dashboard.component';
import { ProcureModule } from './psc/psc_procure/procure.module';
//import { LabofficeComponent } from './procure/laboffice/laboffice.component';

@NgModule({
  declarations: [
    AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,PscShareModule.forRoot(),
    ProcureModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
// is is module edit

 }
