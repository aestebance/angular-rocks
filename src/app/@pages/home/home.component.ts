import { Component, OnInit } from '@angular/core';
import {BandsService} from "../../shared/services/bands.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  bandList : any;
  constructor(private bandsService : BandsService) { }

  ngOnInit(): void {
    this.bandsService.getBandListObservable().subscribe(bandList => {
      this.bandList = bandList;
    });
    // this.bandsService.deleteBandList(1);
    // this.bandsService.addBandList("");
    // this.bandsService.setBandList(1, "");
  }
}
