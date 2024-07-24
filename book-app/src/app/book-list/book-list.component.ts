import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../navigation.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  bookListData: any = [];
  constructor(private navigationService: NavigationService){}

  ngOnInit(): void {
    this.navigationService.getBookList().subscribe({
      next: res => {
        this.bookListData = res;
      },
      error: err => {
        console.log(err);
      }
    });
  }

}
