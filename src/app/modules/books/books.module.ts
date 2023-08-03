import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListOfBooksComponent } from './list-of-books/list-of-books.component';
import { SingleBookComponent } from './single-book/single-book.component';
import { AddBookComponent } from './add-book/add-book.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ListOfBooksComponent, SingleBookComponent, AddBookComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
})
export class BooksModule {}
