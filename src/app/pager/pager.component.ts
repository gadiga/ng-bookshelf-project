import {Component, OnInit, Input, Output, EventEmitter} from "@angular/core";

@Component({
  selector: 'app-pager',
  templateUrl: './pager.component.html',
  styleUrls: ['./pager.component.css']
})
export class PagerComponent implements OnInit {

  @Input('page') private page: number;
  @Input('totalPages') private totalPages: number;
  @Output('pageMove') private pageMove: EventEmitter<number> = new EventEmitter<number>();

  constructor() {
  }

  next() {
    this.pageMove.emit(this.page + 1);
  }

  prev() {
    this.pageMove.emit(this.page - 1);
  }


  ngOnInit() {
  }

}
