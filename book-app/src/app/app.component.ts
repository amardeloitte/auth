import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'book-app';
  constructor(public authService: AuthService, private route: Router){}

  logoutUser() {
    localStorage.removeItem("token");
    this.route.navigate(["/dashboard"]);
  }
}
