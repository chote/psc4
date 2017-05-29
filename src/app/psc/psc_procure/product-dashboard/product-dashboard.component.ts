import { Component, OnInit } from '@angular/core';
import { BaseComponent } from "../../../../app/psc/psc_shared/psc_base.component";

@Component({
  selector: 'app-product-dashboard',
  templateUrl: './product-dashboard.component.html',
  styleUrls: ['./product-dashboard.component.css']
})
export class ProductDashboardComponent extends BaseComponent implements OnInit {

  
  options: object;
  ngOnInit() {
    this.options = {
       type:'bar',
            title : { text : 'simple chart' },
            series: [{ type:'column',
                data: [29.9, 71.5, 106.4, 129.2],
            }]
        };
  }

}
