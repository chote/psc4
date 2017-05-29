import { Component, OnInit,Output, Input, EventEmitter } from '@angular/core';
import { BaseComponent } from "../../../../app/psc/psc_shared/psc_base.component";
@Component({
  selector: 'app-productfilter',
  templateUrl: './productfilter.component.html',
  styleUrls: ['./productfilter.component.css']
})
export class ProductfilterComponent extends BaseComponent implements OnInit {
  @Input()
  cat: any;  
 // model1 = new mymodel();// = {dateprocure:"",officeid:0,amount:0};
  @Output()
  sendFilter = new EventEmitter();

  display: boolean = false;


  
  obj: any;
  doSelectFilter(c:any,name:string) { 
    c['filterName'] = name;
   // console.log(c);
    
    this.sendFilter.emit(c)
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
      let color = ['#ffbee7','#ffc591','#ccff94','#bdf3ff','#d9a9ff'];
 
  for (var i = 0; i < this.suppliers.length; i++) {

        obj = { supname: this.suppliers[i]['supname'],supid: this.suppliers[i]['supid'], text: this.suppliers[i]['supname'], cols: Math.floor(Math.random() * 3) + 1  , rows: Math.floor(Math.random() * 3) + 1  , color:color[Math.floor(Math.random() * 5) ] }
     
      this.tiles.push(obj);
   
    
  }
     console.log( this.tiles);  
    });
  }

}


