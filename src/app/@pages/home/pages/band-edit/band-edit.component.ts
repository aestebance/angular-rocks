import { Component, OnInit } from '@angular/core';
import {BandsService} from "../../../../shared/services/bands.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Location} from '@angular/common';

@Component({
  selector: 'app-band-edit',
  templateUrl: './band-edit.component.html',
  styleUrls: ['./band-edit.component.scss']
})
export class BandEditComponent implements OnInit {
  bandList: any;
  bandId: any;
  bandTemp: any = {};
  band: any;
  new: boolean = false;

  constructor(private route: ActivatedRoute, private location : Location, private bandsService: BandsService) {
    this.route.paramMap.subscribe(params => {
      if (params.get('bandId')) {
        this.bandId = params.get('bandId');
      }

      this.bandsService.getBandListObservable().subscribe(bandList => {
        this.bandList = bandList;
      });

      if (this.bandList.length <= this.bandId) {
        this.new = true;
        this.band = {
          "name" : "",
          "description" : "",
          "image" : "empty.jpg",
          "discography" : [

          ],
          "video" : "",
          "webpage" : ""
        };
      } else {
        this.band = this.bandList[this.bandId];
      }
    });
  }

  ngOnInit(): void {
    this.bandTemp = JSON.parse(JSON.stringify(this.band));
  }

  saveBand() : void {

  }

  back() : void {
    this.location.back();
  }

  discard() : void {
    this.location.back();
  }
}
