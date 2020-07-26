import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule, Validators } from '@angular/forms';
import { ApiServiceService } from '../services/api-service.service';
import { User } from '../models/user';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private router: Router, private apiService: ApiServiceService) { }

  ngOnInit() {
    console.log(name);
  }

  signup(formValues) {
    // this.router.navigate(['admin']);
    const user: User = {
      name: formValues.name,
      email: formValues.email,
      password: formValues.password,
      mobile: formValues.phoneNumber,
      age: formValues.age
    };
    this.apiService.signup(user).subscribe(response => console.log('signup response:', response));
  }

  cancel() {
    this.router.navigate(['']);
  }

}
