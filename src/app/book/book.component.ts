import {Component} from "@angular/core";
import {Book} from "../shared/book";
import { ActivatedRoute } from '@angular/router';
import { GoogleBooksService } from "../shared/google-books.service";
import { LibraryService } from "../shared/library.service";

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {

  private id;
  private book: Book;

  constructor(
    private route: ActivatedRoute,
    private google: GoogleBooksService,
    private library: LibraryService
  ) {
    route.params.subscribe(params=>{
      this.id = params['id'];
      this.getBook(this.id);
    });
  }

  getBook(bookId: string) {
    this.google.retrieveBook(bookId).subscribe(book=> this.book = book)
  }

  hasBook(book: Book): boolean {
    return this.library.hasBook(book);
  }

  addBook(book: Book) {
    this.library.addBook(book);
  }

  removeBook(book: Book) {
    this.library.removeBook(book);
  }
}
