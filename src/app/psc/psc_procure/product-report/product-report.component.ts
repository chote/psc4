import { Component, OnInit } from '@angular/core';
import { BaseComponent } from "../../../../app/psc/psc_shared/psc_base.component";
import { ChartModule } from 'primeng/primeng';
import * as _ from "lodash";
@Component({
  selector: 'app-product-report',
  templateUrl: './product-report.component.html',
  styleUrls: ['./product-report.component.css']
})
export class ProductReportComponent extends BaseComponent implements OnInit {

  data: any;
  seriesNum = 1;
  options = {};
  labels = [];
 // datasets = [];
  series = {};
  labelA: string;
  dataA = [];
  labelB: string;
  dataB = [];
  rp1: any[];
  setInput() {
 let sql ={sql:"select sum(m.pricelot) price,c.monthcode,c.monthname  from cmonth c left JOIN   mainstockin m on   month(m.datestockin) = c.monthcode group by c.monthcode"
  };
    this._productService.getSql(sql).subscribe(res => this.rp1 = res, err => { console.log("error");
    }, () => {
      console.log(this.rp1); 
      this.seriesNum = 1;
      this.labelA = "จำนวนมูลค่ารับเข้า";
     for (let rp of this.rp1 ){
       this.labels.push(rp.monthname);
       this.dataA.push(rp.price);

      }  
     this.compileData();
     });

   }
  compileData() {
    this.series = {
          label: this.labelA,
          data: this.dataA
        }
    this.data = {
      labels: this.labels,
      datasets: [
        this.series
      ]
    };
     this.options = {
            title: {
                display: true,
                text: 'My Title',
                fontSize: 16
            },
            legend: {
                position: 'bottom'
            }
        };
  }
  ngOnInit() {
    this.setInput();
  }

}
