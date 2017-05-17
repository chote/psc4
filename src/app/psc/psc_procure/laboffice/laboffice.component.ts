import { Component, OnInit } from '@angular/core';
//import { ProductService } from '../../../../app/psc/psc_shared/psc_server';
import { BaseComponent } from "../../../../app/psc/psc_shared/psc_base.component";
@Component({
  selector: 'app-laboffice',
  templateUrl: './laboffice.component.html',
  styleUrls: ['./laboffice.component.css']
})
export class LabofficeComponent extends BaseComponent implements OnInit {
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
      if (event.model.hasOwnProperty("labid")) {
        cmodel['updateId'] = "labid=" + cmodel.labid;
      }
      let cc: any;
      this._productService.getAdd(cmodel, 'laboffice').subscribe(res => cc = res, err => {
        console.log('err'), () => {
             
          console.log("good");
        };
      })
    }
  }
  ngOnInit() {

    let sql: any;

    //  sql = { tbl: "hospital",con:"1=1 and pvcode ='36' and hostypename in('โรงพยาบาลชุมชน','โรงพยาบาลศูนย์','โรงพยาบาลทั่วไป') " }; console.log(sql);
    sql = { sql: "select * from laboffice " };
    this._productService.getSql(sql).subscribe(resproducts => this.models = resproducts, err => { console.log(err); }, () => {
      console.log(this.models);

    });
  }

}

