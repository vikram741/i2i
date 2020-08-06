import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  constructor(private auth: AuthService,private router:Router) { }

  loggedIn = false;
  active = false;
  loaded = false;
  userName =  null;
  userDP = null
  ngOnInit() {
    this.auth.loginStatus.subscribe( (value:any)=>{
      console.log(value)
      this.loaded = value.loaded
      this.active = value.active
      this.loggedIn = value.success;

      if(!this.loggedIn)
      {
        this.router.navigate(['browse'])
      }

    })

    this.auth.userDetails.subscribe((value:any)=>{
     // console.log(value)
      this.userDP = value.displayPicture
      this.userName = value.name
    })
  }

  updateDp()
  {
    document.getElementById('profilePic').click()
  }
  uploadDp(files: FileList)
  {
      console.log(files)
  }

}
