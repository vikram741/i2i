import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule, Validators } from '@angular/forms';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor( private router: Router) { }

  ngOnInit() {
    console.log(name);
  }

  signup(formValues) {
    this.router.navigate(['admin']);
  }

  cancel() {
    this.router.navigate(['']);
  }

}
