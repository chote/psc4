import { Component, OnInit } from '@angular/core';
import { BaseComponent } from "../../../../app/psc/psc_shared/psc_base.component";
import { ChartModule } from 'primeng/primeng';
import * as _ from "lodash";
@Component({
  selector: 'app-product-dashboard',
  templateUrl: './product-dashboard.component.html',
  styleUrls: ['./product-dashboard.component.css']
})
export class ProductDashboardComponent extends BaseComponent implements OnInit {

  
  data: object; data2: any;
  options: object;
  rp1: any; 
  doflat(n) {
  return "'"+n['monthname']+"'";
}
  ngOnInit() {
    this.r2.isDesk = this.r1.isDesk;
    this.doTest();
    this.options = {
      title: { text: 'simple chart' },
      series: [{
        data: [29.9, 71.5, 106.4, 129.2],
      }]
    };
    let sql ={sql:"select sum(m.pricelot) price,c.monthcode,c.monthname  from cmonth c left JOIN   mainstockin m on   month(m.datestockin) = c.monthcode group by c.monthcode"
  };
    this._productService.getSql(sql).subscribe(res => this.rp1 = res, err => { console.log("error");
    }, () => {
      //console.log(sql);
   console.log(this.rp1);
      let xx = _.flatMap(this.rp1,this.doflat);
     // for (let name of this.rp1) { 
  console.log("xx= "+xx);
        
     // }
      
     });
this.data2

     this.data = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'My First dataset',
                    backgroundColor: '#42A5F5',
                    borderColor: '#1E88E5',
                    data: [65, 59, 80, 81, 56, 55, 40]
                }
            ]
        }
  }


  r1 = new Room();
    createroom(r:any) {
    r.isDesk = false;
    r.windowsCount = 2;
    r.doorStyle = "wood";
   }

    r2 = new Room();
  
 m1 = { mname: "xx", mcode: "1230" };
 m2 = { mname: "xxy", mcode: "1230" };
 m3 = { mname: "xx", mcode: "1230" };
 m4 = this.m1; 
  doTest() { 
   console.log(this.m1===this.m2);
   console.log(this.m1 === this.m3);
   console.log(_.isEqual(this.m1,this.m3));
    
  }
}
class Room{
  isDesk: boolean;
  doorStyle: string;
  windowStyle: string;
  windowsCount: number;
  onOpenDoor() { 
    //doBellRing
  }

}