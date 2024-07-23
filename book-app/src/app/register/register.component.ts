import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  registerUserData = {email: "", password: ""};

  constructor(private authService: AuthService){}

  registerUser() {
    this.authService.registerUser(this.registerUserData).subscribe({
      next: res => {
        console.log(res)
      },
      error: err => {
        console.log(err);
      }
    })
  }

}
