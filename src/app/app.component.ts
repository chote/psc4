import { Component } from '@angular/core';
import { UserService } from './psc/psc_shared/psc_user.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    
    name: string; 
    user = '';
    message: string;
     constructor( public userService: UserService) {
    
     this.user = userService.userName;
     }
    onClick() {
        this.message = 'Hello ' + this.name;
    }
}
