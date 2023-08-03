import { Injectable } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Book } from '../models/books.model';
import { BooksModel } from './books-store.model';
import { BooksState } from './books-store.state';
import {
  LoadAllBooksAction,
  SetSelectedBookAction,
} from './books-store.actions';

@Injectable({
  providedIn: 'root',
})
export class BookStoreService {
  constructor(private store: Store) {}

  // SELECTORS
  getBooks(): Observable<Book[]> {
    return this.store.select(BooksState.selectAllBooks);
  }

  getBook(): Observable<Book | undefined> {
    return this.store.select(BooksState.selectBook);
  }

  // Dispatch
  loadBooks(): void {
    this.store.dispatch(new LoadAllBooksAction());
  }

  setBook(book: Book): void {
    this.store.dispatch(new SetSelectedBookAction(book));
  }
}
