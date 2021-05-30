import { Component, OnInit } from '@angular/core';
import {BandsService} from "../../../../shared/services/bands.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-band-detail',
  templateUrl: './band-detail.component.html',
  styleUrls: ['./band-detail.component.scss']
})
export class BandDetailComponent implements OnInit {
  bandList: any;
  bandId: any;
  band: any;

  constructor(private route: ActivatedRoute, private bandsService: BandsService) {
    this.route.paramMap.subscribe(params => {
      if (params.get('bandId')) {
        this.bandId = params.get('bandId');
      }

      this.bandsService.getBandListObservable().subscribe(bandList => {
        this.bandList = bandList;
      });

      this.band = this.bandList[this.bandId];
    });
  }


  ngOnInit(): void {
  }

}
