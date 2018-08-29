import {Component, OnInit} from "@angular/core";
import { LibraryService } from "../shared/library.service";
import { Book } from '../shared/book';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit {

  constructor(private library: LibraryService) {    
  }

  ngOnInit() {
  }

}
