import { Component, OnInit } from '@angular/core';
import {BandsService} from "../../shared/services/bands.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  bandList : any;
  bandFiltered: any;
  showSearchBar: boolean = true;
  constructor(private bandsService : BandsService) {
    this.bandsService.getBandListObservable().subscribe(bandList => {
      this.bandList = bandList;
      this.bandFiltered = this.bandList;
    });
  }

  ngOnInit(): void {
    window.scroll(0, 0);
  }

  searchBarChanges(changes: any): void {
    this.bandFiltered = this.bandList.filter((data: any) => data.name.toUpperCase().includes(changes.toUpperCase()));
  }
}
