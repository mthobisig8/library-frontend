import { Injectable } from '@angular/core';
import { HtppService } from '../services/htpp.service';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { BooksModel } from './books-store.model';
import {
  LoadAllBooksAction,
  SetSelectedBookAction,
} from './books-store.actions';
import { Book } from '../models/books.model';

@State<BooksModel>({
  name: 'booksState',
  defaults: {
    allBooks: [],
    selectedBook: undefined,
  },
})
@Injectable({ providedIn: 'root' })
export class BooksState {
  constructor(private _httpService: HtppService) {}

  // SELECTORS
  @Selector()
  static selectAllBooks(state: BooksModel) {
    return state.allBooks;
  }

  @Selector()
  static selectBook(state: BooksModel) {
    return state.selectedBook;
  }

  //   ACTIONS
  @Action(LoadAllBooksAction)
  fetchBooks(ctx: StateContext<BooksModel>) {
    const state = ctx.getState();

    return this._httpService.getBooks().subscribe((res: Book[]) => {
      ctx.setState({
        ...state,
        allBooks: res,
      });
    });
  }

  @Action(SetSelectedBookAction)
  setBook(ctx: StateContext<BooksModel>, action: SetSelectedBookAction) {
    const state = ctx.getState();
    return ctx.setState({
      ...state,
      selectedBook: action.book,
    });
  }
}
