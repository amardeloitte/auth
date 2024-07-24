import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginUserData = {email: "", password: ""};

  constructor(private authService: AuthService, private route: Router){}

  loginUser() {
    this.authService.loginUser(this.loginUserData).subscribe({
      next: res => {
        localStorage.setItem("token", res.token);
        this.route.navigate(["/book-list"]);
      },
      error: err => {
        console.log(err);
      }
    })
  }

}
