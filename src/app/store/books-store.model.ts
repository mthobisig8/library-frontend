import { Book } from '../models/books.model';

export class BooksModel {
  allBooks!: Book[];
  selectedBook: Book | undefined;
}
