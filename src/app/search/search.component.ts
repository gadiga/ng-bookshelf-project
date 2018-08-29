import {Component, OnInit} from '@angular/core';
import {GoogleBooksService} from "../shared/google-books.service";
import { Book } from '../shared/book';
import {Router, ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchStatus = "Enter a search string above and press search";
  searchString: Params;
  books: Book[];
  
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private google: GoogleBooksService
  ) {
    this.google.books$.subscribe(books=>{
      this.books = books;
      if (this.books.length) {
        this.searchStatus = `${this.books.length} books found`;
      } else {
        this.searchStatus = "No results returned"
      }
    });    
  }

  doSearch(searchText: string) {    
    this.searchStatus = "Loading...";
    this.router.navigate(['/search'], { queryParams: {searchQuery: searchText}});
  }

  onSearch(term: string) {
    this.searchStatus = `Searching for ${term}`;
    this.google.searchBooks(term);
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params=> {
      this.searchString = params;
      if (this.searchString['searchQuery']) {
        this.onSearch(this.searchString['searchQuery']);
      }
    });
    
  }

}
