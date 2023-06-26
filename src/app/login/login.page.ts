import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  constructor(private router: Router,private loginService: LoginService) {}
  
  username!: string;
  password!: string;

 
  
  login(username: string, password: string) {
    this.loginService.login(username, password)
      .then(() => {
        // Successful login
        this.navigateToHome();
      })
      .catch(error => {
        // Failed login, handle error
        console.log(error);
        // Optionally, display an error message to the user
      });
    }
    navigateToHome() {
      this.router.navigate(['/home']);
    }

 
}
