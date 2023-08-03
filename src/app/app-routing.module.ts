import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListOfBooksComponent } from './modules/books/list-of-books/list-of-books.component';
import { AddBookComponent } from './modules/books/add-book/add-book.component';
import { SingleBookComponent } from './modules/books/single-book/single-book.component';
import { RegistrationComponent } from './modules/users/registration/registration.component';

const routes: Routes = [
  { path: '', redirectTo: '/books', pathMatch: 'full' },
  { path: 'books', component: ListOfBooksComponent },
  { path: 'add-book', component: AddBookComponent },
  { path: 'book/:id', component: SingleBookComponent },
  { path: 'register', component: RegistrationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
