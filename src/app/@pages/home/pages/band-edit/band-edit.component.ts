import {Component, OnInit} from '@angular/core';
import {BandsService} from "../../../../shared/services/bands.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Location} from '@angular/common';
import {ConfirmationService, Message, PrimeNGConfig} from "primeng/api";

@Component({
  selector: 'app-band-edit',
  templateUrl: './band-edit.component.html',
  styleUrls: ['./band-edit.component.scss'],
  providers: [ConfirmationService]
})
export class BandEditComponent implements OnInit {
  bandList: any;
  bandId: any;
  bandTemp: any = {};
  band: any;
  new: boolean = false;
  msgs: Message[] = [];
  newDisc : any = {
    "name" : "",
    "year" : 0
  }

  constructor(private route: ActivatedRoute,
              private router: Router,
              private location : Location,
              private bandsService: BandsService,
              private confirmationService: ConfirmationService,
              private primengConfig: PrimeNGConfig,)
  {
    this.route.paramMap.subscribe(params => {
      if (params.get('bandId')) {
        this.bandId = params.get('bandId');
      }

      this.bandsService.getBandListObservable().subscribe(bandList => {
        this.bandList = bandList;
      });

      if (this.bandId === 'band') {
        this.new = true;
        this.band = {
          "name" : "",
          "description" : "",
          "image" : "/assets/images/empty.jpg",
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
    this.primengConfig.ripple = true;
    this.bandTemp = JSON.parse(JSON.stringify(this.band));
  }

  confirmDelete() {
    this.confirmationService.confirm({
      message: 'Are you sure that you want to delete this record?',
      header: 'Delete Confirmation',
      icon: 'pi pi-info-circle',
      accept: () => {
        this.msgs = [{severity: 'info', summary: 'Confirmed', detail: 'Record deleted'}];
        this.deleteBand();
      },
      reject: () => {
        this.msgs = [{severity: 'info', summary: 'Rejected', detail: 'You have rejected'}]
      }
    });
  }

  saveBand() : void {
    if (!this.new) {
      this.bandsService.setBandList(this.bandId, this.bandTemp);
    } else {
      this.bandsService.addBand(this.bandTemp);
    }
    this.msgs = [{severity: 'info', summary: 'Confirmed', detail: 'Band saved'}];
  }

  back() : void {
    this.location.back();
  }

  discard() : void {
    this.location.back();
  }

  deleteDisc(name: any) : void {
    this.bandTemp.discography = this.bandTemp.discography.filter(function (element: any) {
      return name !== element.name;
    });
  }

  addDisc() : void {
    this.bandTemp.discography.push({"name" : this.newDisc.name, "year" : this.newDisc.year});
    this.newDisc.name = "";
    this.newDisc.year = 0;
    let li : any = document.querySelector('button.p-button-icon-only');
    li.click();
  }

  deleteBand(): void {
    this.bandsService.deleteBand(this.bandId);
    this.router.navigate(['/']);
  }
}
