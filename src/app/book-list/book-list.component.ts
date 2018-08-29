import {Component, OnInit, Input} from "@angular/core";
import { Book } from "../shared/book";
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  @Input('books') books: Book[];

  constructor(private route: Router) {}

  ngOnInit() {
  }

  getBookDetail(book: Book) {
    this.route.navigate(['books',book.id]);
  }

}
