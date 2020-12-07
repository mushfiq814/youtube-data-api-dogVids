import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  // search query event emitter
  @Output() transferSearch:EventEmitter<string> = new EventEmitter;

  searchQuery:string;

  constructor() { }

  ngOnInit() { }

  // send search query to Videos component
  onSubmit():void {
    console.log("emitting searchQuery: " + this.searchQuery);
    this.transferSearch.emit(this.searchQuery)
  }

}