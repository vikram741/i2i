import { Injectable } from '@angular/core';
import { CanActivate,Router } from '@angular/router';
import {AuthService} from './auth.service'

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router:Router , private auth:AuthService)
  {

  }
  
  canActivate(): boolean {
   // console.log("in canActivate")
  //  
  
   return false

  }
  
}
