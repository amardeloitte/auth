import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  registerUserData = {email: "", password: ""};

  constructor(private authService: AuthService, private route: Router){}

  registerUser() {
    this.authService.registerUser(this.registerUserData).subscribe({
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
