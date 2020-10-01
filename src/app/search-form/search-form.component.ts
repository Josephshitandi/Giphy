import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {
searchTerm: string = '';

@Output() searchableTerm = new EventEmitter<string>();

search(){
  this.searchableTerm.emit(this.searchTerm);
}

  constructor() { }

  ngOnInit(): void {
  }

}
