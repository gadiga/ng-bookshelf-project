import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Book } from '../shared/book';
import { GoogleBooksService } from '../shared/google-books.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchStatus = "Enter a search string above and press search";
  searchString: string;
  books: Book[];
  term;
  
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private google: GoogleBooksService
  ) {
    this.google.books$.subscribe(status=>{
      this.books = status.books;
      if (status.initialised && status.loading) {
        this.searchStatus = "Loading...";    
      }
  
      if (status.initialised && !status.loading && status.totalItems === 0) {
        this.searchStatus = `No items found`;    
      }
  
      if (status.initialised && !status.loading && status.totalItems > 0) {
        this.searchStatus = `${this.google.totalItems} books found`;    
      }
    });    
  }

  doSearch() {
    this.router.navigate(['/search'], { queryParams: {searchQuery: this.term}});
  }

  onSearch(term: string) {
    this.term = term;
    this.searchStatus = `Searching for ${term}`;
    this.google.searchBooks(term);
    this.setStatus();
  }

  private setStatus () {
    if (this.google.initialised && this.google.loading) {
      this.searchStatus = "Loading...";    
    }

    if (this.google.initialised && !this.google.loading && this.google.totalItems > 0) {
      this.searchStatus = `Searching for ${this.term}`;    
    }

    if (this.google.initialised && !this.google.loading && this.google.totalItems > 0) {
      this.searchStatus = `${this.google.totalItems} books found`;    
    }
  }

  getPage(pageNumber: number) {
    this.google.page = pageNumber;
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params=> {
      if (params['searchQuery']) {
        this.searchString = params['searchQuery'];
        this.onSearch(this.searchString);
      }
    });
    
  }

}
