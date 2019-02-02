import { Component, OnInit } from '@angular/core';
import { User } from '../shared/models/user';
import { UserLogin } from '../shared/models/userlogin';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user : User;
  userLogin : UserLogin = {
    username: '',
    password: ''
  };
  isValid : boolean;
  constructor(private authenticationService : AuthenticationService, private route : Router) { }

  ngOnInit() {
  }

  login(){
    console.log(this.userLogin);
    this.authenticationService.login(this.userLogin).subscribe(response =>{
      this.isValid = response;
      console.log(this.isValid);
      this.route.navigate(['/']);
    });
  }
}
