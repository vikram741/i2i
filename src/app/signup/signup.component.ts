import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { AuthService } from '../service/auth.service'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  mailTaken = false;
  phntaken =false;
  constructor(private auth : AuthService,private router :Router ) {
    
   }
  ngOnInit() {
  }
  regUser(regdata :{name:string,mail_id:string,password:string,phn_no:string} )
  {
    console.log('in component--',regdata)
        this.auth.registerUser(regdata)
        .subscribe(
          res => { //console.log(res)
            localStorage.setItem('token',res.token)
            localStorage.setItem('mailid',regdata.mail_id)
            this.router.navigate(['/user']);
          }  ,
          err => {
            if(err.error.type=='Mail Id already taken')this.mailTaken=true;
            else if(err.error.type='Phone number already used'){
              this.mailTaken=false;
              this.phntaken = true;
            }
          }
        )
  }

}
