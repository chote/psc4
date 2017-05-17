import { Component, OnInit } from '@angular/core';
//import { ProductService } from '../../app/../service/server';
import { BaseComponent } from "../../../../app/psc/psc_shared/psc_base.component";
import * as _ from "lodash";
@Component({
  selector: 'app-labprocure',
  templateUrl: './labprocure.component.html',
  styleUrls: ['./labprocure.component.css']
})
export class LabprocureComponent extends BaseComponent implements OnInit {

  selectItem(item: any) {

    this.showDialog(item);
  }
  display: boolean = false;

  showDialog(item: any) {
    this.model = item;
    this.display = true;
  }
  getAddNew() {
    this.model = {};
    this.display = true;
  }
  delete() {
        let index = this.findSelectedIndex();
        this.models = this.models.filter((val,i) => i!=index);
       
    
  }   
  confirmDelete(r: any) {
     console.log(r);
     
        this.confirmationService.confirm({
            message: 'คุณต้องการลบ Recordนี้ ้?',
            accept: () => {
                //Actual logic to perform a confirmation
               // console.log(r);
             //  console.log( this.mproducts.indexOf(r));
               this.models.splice(this.models.indexOf(r), 1);
            },
            reject:()=>{

            }
        });
    }
  findSelectedIndex(): number {
        return this.models.indexOf(this.model);
    }
  getUpdate(event) {
    console.log(event.model);

   // if (1 == 1) { return true; }
    this.display = false;
    if (event.isSave) {
      let cmodel = event.model;
      this.model = event.model;
     
      if (event.model.hasOwnProperty("labid")) {
        cmodel['updateId'] = "labid=" + cmodel.labid;
      }
      let cc: any;
      this._productService.getAdd(cmodel, 'labprocure').subscribe(res => cc = res, err => {
        console.log('err')
      }, () => {
  
        if (event.model.hasOwnProperty("labid")) {
         let index = this.findSelectedIndex();
          this.models[index]=this.model  ;
              this.model['officename'] = event['officename'];
        } else { 
          let lastmodel: any;
          this.sql1 = { sql: "select p.*,o.officename from labprocure p ,laboffice o where p.officeid=o.officeid order by labid desc limit 1" };
    this._productService.getSql(this.sql1).subscribe(resproducts => lastmodel = resproducts, err => { console.log(err); }, () => {
      this.models.unshift(lastmodel[0]);
          });
        }    
           
        
      })
    }
  }
  sql: any;
  sql1: any;
  offices: any[];
  ngOnInit() {

    //let sql: any;

    //  sql = { tbl: "hospital",con:"1=1 and pvcode ='36' and hostypename in('โรงพยาบาลชุมชน','โรงพยาบาลศูนย์','โรงพยาบาลทั่วไป') " }; console.log(sql);
    this.sql = { sql: "select p.*,o.officename from labprocure p ,laboffice o where p.officeid=o.officeid order by labid desc" };
    this._productService.getSql(this.sql).subscribe(resproducts => this.models = resproducts, err => { console.log(err); }, () => {
      console.log(this.models);
    });

  }

}
