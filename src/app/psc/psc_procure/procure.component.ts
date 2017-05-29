import { Component, OnInit } from '@angular/core';
import { LabprocureAddComponent } from './labprocure/labprocure-add.component';
import { LabprocureComponent } from './labprocure/labprocure.component';
import { LabofficeComponent } from './laboffice/laboffice.component';
import { ShowproductComponent } from './showproduct/showproduct.component';

@Component({
  selector: 'app-procure',
  templateUrl: './procure.component.html',
  styleUrls: ['./procure.component.css']
})
export class ProcureComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
