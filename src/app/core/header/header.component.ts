import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() showSearchBar: any;
  @Output() searchBarEmitter = new EventEmitter();

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  searchBarChanges(changes: any): void {
    this.searchBarEmitter.emit(changes);
  }

  isDirectoryPath(path: string) {
    return this.router.isActive('/' + path , true);
  }
}
