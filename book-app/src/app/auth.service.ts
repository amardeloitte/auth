import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  registerUrl = "http://localhost:8000/api/register";

  constructor(private http: HttpClient) { }

  registerUser(userData: any) {
    return this.http.post<any>(this.registerUrl, userData);
  }
}
