import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  bookListUrl = "http://localhost:8000/api/bookList";

  constructor(private http: HttpClient) { }

  getBookList() {
    return this.http.get<any>(this.bookListUrl);
  }

}
