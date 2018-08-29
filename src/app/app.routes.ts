import {Routes} from "@angular/router";
import { BookListComponent } from './book-list/book-list.component';
import { SearchComponent } from "./search/search.component";
import { LibraryComponent } from "./library/library.component";
import { BookComponent } from './book/book.component';

export const routes: Routes = [
  {path: '', redirectTo: 'library', pathMatch: 'full'},
  {path: 'search', component: SearchComponent},
  {path: 'library', component: LibraryComponent},
  {path: 'books/:id', component: BookComponent}
];
