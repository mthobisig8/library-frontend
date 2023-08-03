import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from '../models/books.model';

@Injectable({
  providedIn: 'root',
})
export class HtppService {
  baseUrl: string = 'http://localhost:3000';

  constructor(private _http: HttpClient) {}

  getBooks(): Observable<Book[]> {
    return this._http.get<Book[]>(`${this.baseUrl}/books`);
  }

  getBookById(id: string): Observable<Book> {
    return this._http.get<Book>(`${this.baseUrl}/books/${id}`);
  }

  addBook(body: Object): Observable<{ msg: string }> {
    return this._http.post<{ msg: string }>(`${this.baseUrl}/add-book`, body, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    });
  }
}
