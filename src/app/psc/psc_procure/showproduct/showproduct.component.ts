import { Component, OnInit } from '@angular/core';
import { BaseComponent } from "../../../../app/psc/psc_shared/psc_base.component";
@Component({
  selector: 'app-showproduct',
  templateUrl: './showproduct.component.html',
  styleUrls: ['./showproduct.component.css']
})
export class ShowproductComponent extends BaseComponent implements OnInit {


  cats: any[];
  getCats(ind:string) { 
let sql: any;
sql = { sql: "select * from categories" };
    //console.log(sql);
    
    this._productService.getSql(sql).subscribe(resproducts => this.cats = resproducts, err => { console.log(err); }, () => {
   //   console.log(this.models);

    });
  }
  getModels(sql:any) { 

    console.log(sql);
    
    this._productService.getSql(sql).subscribe(resproducts => this.models = resproducts, err => { console.log(err); }, () => {
   //   console.log(this.models);

    });
  }
  ngOnInit() {
    this.getModels({sql:"select * from mainproduct limit 1"});
    this.getSuppliers("desc");this.getCats("desc");
  }

  getChildFilter(c: any) {
    let con = "";
    let sql: any;
    console.log(c);
    
    if (c.filterName == "cat") {
      con = " catid = " + c.catid;
      sql = { sql: "select * from mainproduct where " + con };
    }
    if (c.filterName == "supplier") {
       sql = { sql: "select * from mainproduct m ,mainstockin i where m.mid = i.mid and i.supid= " + c.supid };
     }
    console.log(sql);
    
    this.getModels(sql);
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
      let color = ['#e2e6e9','#b6bdc5','#fef4ea','#ccaf91','#674737'];
 
  for (var i = 0; i < this.suppliers.length; i++) {

        obj = {supname: this.suppliers[i]['supname'],supid: this.suppliers[i]['supid'], text: this.suppliers[i]['supname'], cols: Math.floor(Math.random() * 3) + 1  , rows: Math.floor(Math.random() * 3) + 1  , color:color[Math.floor(Math.random() * 5) ] }
     
      this.tiles.push(obj);
   
    
  }
     console.log( this.tiles);  
    });
  }

}

