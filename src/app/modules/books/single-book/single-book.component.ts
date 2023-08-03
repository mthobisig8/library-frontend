import { Component, Input, OnInit } from '@angular/core';
import { Book } from 'src/app/models/books.model';
import { HtppService } from 'src/app/services/htpp.service';
import { BookStoreService } from 'src/app/store/books-store.service';

@Component({
  selector: 'app-single-book',
  templateUrl: './single-book.component.html',
  styleUrls: ['./single-book.component.css'],
})
export class SingleBookComponent implements OnInit {
  book: Book | undefined;
  constructor(private storeService: BookStoreService) {}

  ngOnInit(): void {
    this.storeService.getBook().subscribe((res) => (this.book = res));
  }
}
