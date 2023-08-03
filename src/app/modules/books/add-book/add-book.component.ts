import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { map } from 'rxjs';
import { Author } from 'src/app/models/author.model';
import { Book } from 'src/app/models/books.model';
import { Publication } from 'src/app/models/publication.model';
import { HtppService } from 'src/app/services/htpp.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css'],
})
export class AddBookComponent {
  // @ViewChild('bookForm', { static: false }) bookForm!: NgForm;
  languages: string[] = ['English', 'IsiZulu', 'Afrikaans'];

  book!: Book;
  publication!: Publication;
  authors: Author[] = [];
  message!: string;

  constructor(private httpService: HtppService) {}

  onSubmit(bookForm: NgForm) {
    this.publication = {
      name: bookForm.value.pname,
      date: bookForm.value.date,
    };

    this.authors.push({
      name: bookForm.value.fname,
      surname: bookForm.value.lname,
    });

    this.book = {
      authors: this.authors,
      language: bookForm.value.langauge,
      publication: this.publication,
      title: bookForm.value.title,
      url: bookForm.value.url,
    };

    console.log(this.book);
    this.httpService
      .addBook(this.book)
      .pipe(
        map((res: any) => {
          this.message = res.msg;
        })
      )
      .subscribe();
  }
}
