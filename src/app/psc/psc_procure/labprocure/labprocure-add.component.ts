import { AfterViewInit,Component, OnInit,Output, Input, EventEmitter } from '@angular/core';
import { BaseComponent } from "../../../../app/psc/psc_shared/psc_base.component";
declare var jQuery:any;
@Component({
  selector: 'app-labprocure-add',
  templateUrl: './labprocure-add.component.html',
  styleUrls: ['./labprocure-add.component.css']
})

export class LabprocureAddComponent extends BaseComponent  implements OnInit {
  @Input()
  model1 = new mymodel();// = {dateprocure:"",officeid:0,amount:0};
  @Output()
  doUpdate = new EventEmitter();;
  //model2: any
  setLabel() { 
    jQuery('label').addClass('active');
    jQuery('#dateprocure').change();
  }
 
  obj = {};
  doSave() { 
   
    this.obj['isSave'] = true;
     this.obj['model'] =this.model1;
    this.doUpdate.emit(this.obj)
  }
  doCancel() { 
    this.obj['isSave'] = false;
  this.doUpdate.emit(this.obj)
  }
  doOnChange(ev) {
 // console.log(ev.originalEvent.target.innerText);
  this.obj['officename'] = ev.originalEvent.target.innerText;
}  
  doChange(ev: any) {
   // console.log(ev);
    this.model1.officeid = ev;   
   }
   offices = [];
  ngOnInit() {
   
 //this.model2.dateprocure = "fff";
    this.offices.push({label:"โปรดเลือกบริษัท",value:"0"});
  let sql = { sql: "select officename label,officeid as 'value' from laboffice" };
     this._productService.getSql(sql).subscribe(resproducts => this.offices = this.offices.concat(resproducts), err => {   console.log(err); }, () => {
           console.log(this.offices);
     
        });
  }
  ngAfterViewEnit() {
    console.log("ok");
    
 //   this.setLabel();
}
}
class mymodel{ 
  dateprocure: string;
  officeid: number;
  amount: number;
}  