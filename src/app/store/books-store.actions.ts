import { Book } from '../models/books.model';

export class LoadAllBooksAction {
  static readonly type = '[AllBooks] Load';
}

export class SetSelectedBookAction {
  static readonly type = '[SelectedProduct] Set';

  constructor(public book: Book) {}
}
