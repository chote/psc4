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
  doDelete(r: any) { 
    let cc: any;
    let updateId = " officeid=" + r.officeid;
    console.log(updateId);
    
    let st = { tbl: "laboffice", updateId:updateId };
    this._productService.getDelete(st).subscribe(res => cc = res, err => { }, () => {

      this.models.splice(this.models.indexOf(r), 1);
     });
  }
  confirmDelete(r: any) {
     console.log(r);
     
        this.confirmationService.confirm({
            message: 'คุณต้องการลบ Recordนี้ ้?',
            accept: () => {
              this.doDelete(r);        
        
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
      if (event.model.hasOwnProperty("officeid")) {
        cmodel['updateId'] = "officeid=" + cmodel.officeid;
      }

      let cc: any;
this._productService.getAdd(cmodel, 'laboffice').subscribe(res => cc = res, err => {
  console.log('err');
      }, () => {
          console.log("good");
          this.getModels("desc");
      });
    }
  }
  cats: any[];
  getCats(ind:string) { 
let sql: any;
sql = { sql: "select * from categories" };
    //console.log(sql);
    
    this._productService.getSql(sql).subscribe(resproducts => this.cats = resproducts, err => { console.log(err); }, () => {
   //   console.log(this.models);

    });
  }
  getModels(ind:string) { 
let sql: any;
sql = { sql: "select * from laboffice order by officeid " + ind };
    //console.log(sql);
    
    this._productService.getSql(sql).subscribe(resproducts => this.models = resproducts, err => { console.log(err); }, () => {
   //   console.log(this.models);

    });
  }
  ngOnInit() {
    this.getModels("desc");
    this.getSuppliers("desc");this.getCats("desc");
  }
 getRandomColor() {
   var letters = '0123456789ABCDEF'.split('');
   var color = '#';
   for (var i = 0; i < 6; i++ ) {
       color += letters[Math.floor(Math.random() * 16)];
   }
   return color;
}
  suppliers: any[];
  tiles=[];
   
 getSuppliers(ind:string) { 
let sql: any;
sql = { sql: "select * from supplier " };
    //console.log(sql);
let obj: any;
    this._productService.getSql(sql).subscribe(resproducts => this.suppliers = resproducts, err => { console.log(err); }, () => {
   //   console.log(this.models);;
      let color = ['#e4fefb', '#fee4e7	', '#e7fee4	', '#e4e7fe','#feff9b'];
 
  for (var i = 0; i < this.suppliers.length; i++) {

        obj = { text: this.suppliers[i]['supname'], cols: Math.floor(Math.random() * 3) + 1  , rows: Math.floor(Math.random() * 3) + 1  , color:color[Math.floor(Math.random() * 5) ] }
     
      this.tiles.push(obj);
   
    
  }
     console.log( this.tiles);  
    });
  }

}

