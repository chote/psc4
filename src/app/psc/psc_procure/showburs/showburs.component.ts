import { Component, OnInit } from '@angular/core';
import { BaseComponent } from "../../../../app/psc/psc_shared/psc_base.component";
import * as _ from 'lodash';
import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'app-showburs',
  templateUrl: './showburs.component.html',
  styleUrls: ['./showburs.component.css']
})
export class ShowbursComponent extends BaseComponent implements OnInit {

  getModels(sql: any) {
   this._productService.getSql(sql).subscribe(resproducts => this.models = resproducts, err => { console.log(err); }, () => {
    });
  }
  isShowData = false;
  txtSearch = "";
  t0 = "";
  t1 = "";
  t2 = "";
  t3 = "";
  catid = 1;
  updateText(t: string) {
    if (this.txtSearch.indexOf('t') == -1) {
      this.txtSearch = this.t0 + " " + this.t1 + " " + this.t2 + " " + this.t3;

    }
  }
  doSetMaster(a: string) {
    this.isShowData = true;
    this.selectedChip = a;
    this.txtSearch = a;
    this.doSetFilter("");
  }
  doSetFilter(a: any) {
    this.txtSearch = this.selectedChip + " " + a;
    let txt = this.txtSearch.trim();
    this.models = _.filter(this.model1, function (o) {
      let xx = true;
      let str = txt.split(" ");
      str.forEach(v => {
        if (o['mname'].indexOf(v) !== -1) {
          xx = xx && true;
        } else { xx = xx && false }
      });
      if (xx) { return o; }
    });
    //    console.log(str);
  }

  y0 = [];
  y1 = [];
  y2 = [];
  y3 = [];
  yn = [];
  arrburs = [];
  burs = [];
  sample = "Micro";
  bgColor = "#FFDB73";
  selectedChip = "Airoter";

  setColor(a, lv: number) {
    //console.log("sample = "+a);
    this.sample = a;
    let ss = this.selectedChip + " " + a;

    let obj = _.filter(this.arrburs, function (o) {
      let str = ss.split(" ");
      //    console.log(str);

      let x = true;
      str.forEach(v => {
        if (o.indexOf(v) !== -1) { x = x && true; } else { x = x && false }
      })
      if (x) { return o };

    });
    let sh = _.find(obj, function (o) {

      if (o.indexOf(a) !== -1) { return o; }
    });

    if (sh) { return true; } else { return false; }
  }
  model1: any[];
  setup() {
    let catid = this.catid;
    this.y0 = [];
    this.y1 = [];
    this.y2 = [];
    this.y3 = [];
    this.yn = [];
     this.selectedChip = "Airoter"
   // this.arrburs = [];
    this.burs = _.filter(this.model1, function (o) {
      if (o['catid'] == catid) { return o; }
    });

    this.burs.forEach(v => {
      let xx: any[] = v.mname.split(/[\s-]+/);
      //  xx = ['Air','prep','taper','008'];
      this.arrburs.push(xx);
      //console.log(this.arrburs);
      for (let i = 0; i < 4; i++) {
        if (xx[i] && i == 0 && this.y0.indexOf(xx[i]) == -1) { this.y0.push(xx[i]); }
        if (xx[i] && i == 1 && this.y1.indexOf(xx[i]) == -1) { this.y1.push(xx[i]); }
        if (xx[i] && i == 2 && this.y2.indexOf(xx[i]) == -1) { this.y2.push(xx[i]); }
        if (xx[i] && i == 3 && this.yn.indexOf(xx[i]) == -1) { this.yn.push(xx[i]); }
      }
    });
    this.yn.forEach(v => {
      // console.log(v);
      if (v && this.y2.indexOf(v) == -1 && v) { this.y3.push(v); }
    });
    this.y3 = this.y3.sort();

  }
  catname = "";
  doFilterCat(cat:any) {
    this.catname = cat.catname;
     this.isShowData = false;
    this.selectedChip = "";
    this.txtSearch = "";
    this.doSetFilter("");
    this.catid = cat.catid;
     console.log(cat.catid);
    this.setup();
  }
  cats = [];
  ngOnInit() {

    let sql = { sql: "select * from mainproduct " };
    this._productService.getSql(sql).subscribe(resproducts => this.models = resproducts, err => { console.log(err); }, () => {
      this.model1 = _.clone(this.models);
      sql = { sql: "select * from categories  " };
      this._productService.getSql(sql).subscribe(resproducts => this.cats = resproducts, err => { console.log(err); }, () => { });

      this.setup();

    });
    // console.log(this.y0);
    //console.log(this.y1);
    //   console.log(this.y2);console.log(this.y3);


  }


}
