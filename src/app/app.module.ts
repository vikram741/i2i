import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import {MatRippleModule} from '@angular/material/core';
import {HttpClientModule,HTTP_INTERCEPTORS} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { BrowseComponent } from './browse/browse.component';
import { AdminComponent } from './admin/admin.component';
import { BookComponent } from './book/book.component';
import { OpenbookComponent } from './openbook/openbook.component';
import { CategoryComponent } from './category/category.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {TokenInterceptorService} from './service/token-interceptor.service';
import { AccountComponent } from './account/account.component'


@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SignupComponent,
    BrowseComponent,
    AdminComponent,
    BookComponent,
    OpenbookComponent,
    CategoryComponent,
    AccountComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule

  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: TokenInterceptorService, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
