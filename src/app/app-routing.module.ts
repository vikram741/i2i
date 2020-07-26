import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowseComponent } from './browse/browse.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { AdminComponent } from './admin/admin.component';
import { OpenbookComponent } from './openbook/openbook.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'browse'
  },
  { path:"signin",component:SigninComponent },
  { path:"signup",component:SignupComponent },
  { path:"browse",component:BrowseComponent },
  { path:"admin",component:AdminComponent },
  { path:"book",component:OpenbookComponent },
  { path:"**", redirectTo:'browse' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
