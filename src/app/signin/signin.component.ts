import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { AuthService} from '../service/auth.service'

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  logInfo : {mail_id:string , password:string};
  wrngmail = false;
  wrngpswd = false;
  constructor(private auth : AuthService, private router:Router ) { 
      
  }

  ngOnInit() {
  }
 loginUser(logData :{mail_id:string , password:string})
  {
      this.auth.loginUser(logData).subscribe(
        res => {console.log(res)
          localStorage.setItem('token',res.token)
          localStorage.setItem('mailid',logData.mail_id)
          //console.log('in log comp---' , logData.mail_id)
          this.router.navigate(['/user']);

        }  ,
        err=>{
          //console.log(err)
          if(err.error.type == 'Mial Id not found')this.wrngmail = true;
          if(err.error.type == 'Wrong Password'){ this.wrngmail = false; this.wrngpswd=true; }
        }
      )
  }

}
