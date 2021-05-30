import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() showSearchBar: any;
  @Output() searchBarEmitter = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  searchBarChanges(changes: any): void {
    this.searchBarEmitter.emit(changes);
  }

}
