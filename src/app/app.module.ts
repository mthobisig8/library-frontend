import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxsModule } from '@ngxs/store';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NavComponent } from './core/components/nav/nav.component';
import { SpinnerComponent } from './core/components/spinner/spinner.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BooksModule } from './modules/books/books.module';
import { HttpClientModule } from '@angular/common/http';
import { BooksState } from './store/books-store.state';
import { FormsModule } from '@angular/forms';
import { UsersModule } from './modules/users/users.module';

@NgModule({
  declarations: [AppComponent, NavComponent, SpinnerComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    BooksModule,
    UsersModule,
    HttpClientModule,
    NgxsModule.forRoot([]),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsModule.forFeature([BooksState]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
