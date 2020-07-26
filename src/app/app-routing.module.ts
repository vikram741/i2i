import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { BrowseComponent } from './browse/browse.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { AdminComponent } from './admin/admin.component';


const routes: Routes = [
  { path:"",component:BrowseComponent },
  { path:"signin",component:SigninComponent },
  { path:"signup",component:SignupComponent },
  { path:"browse",component:BrowseComponent },
  { path:"admin",component:AdminComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
