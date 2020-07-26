import { Component } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'i2i';
  constructor(private router:Router){

  }

  check()
  {
    if(this.router.url==='/admin')
    {
        return false;
    }
    return true;
  }
}
