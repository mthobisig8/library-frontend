import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Book } from 'src/app/models/books.model';
import { BookStoreService } from 'src/app/store/books-store.service';

@Component({
  selector: 'app-list-of-books',
  templateUrl: './list-of-books.component.html',
  styleUrls: ['./list-of-books.component.css'],
})
export class ListOfBooksComponent {
  constructor(private storeService: BookStoreService, private router: Router) {}

  ngOnInit() {
    this.storeService.loadBooks();

    this.storeService.getBooks().subscribe((res) => (this.books = res));
  }

  books: Book[] = [];

  onBorrowClick(book: Book) {
    this.storeService.setBook(book);
    this.router.navigate([`/book/${book._id}`]);
  }
}
