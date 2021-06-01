import {Component, OnInit} from '@angular/core';
import {BandsService} from "../../../../shared/services/bands.service";
import {ActivatedRoute, Router} from "@angular/router";
import {PrimeNGConfig} from "primeng/api";
import {ConfirmationService} from 'primeng/api';
import {Message} from 'primeng/api';

@Component({
  selector: 'app-band-detail',
  templateUrl: './band-detail.component.html',
  styleUrls: ['./band-detail.component.scss'],
  providers: [ConfirmationService]
})
export class BandDetailComponent implements OnInit {
  bandList: any;
  bandId: any;
  band: any;
  msgs: Message[] = [];

  constructor(private confirmationService: ConfirmationService,
              private primengConfig: PrimeNGConfig,
              private route: ActivatedRoute,
              private router: Router,
              private bandsService: BandsService)
  {
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

  ngOnInit(): void {
    this.primengConfig.ripple = true;
    window.scroll(0, 0);
  }

  deleteBand(): void {
    this.bandsService.deleteBand(this.bandId);
    this.router.navigate(['/']);
  }

  editBand(): void {
    this.router.navigate(['/edit/' + this.bandId]);
  }

  newBand() : void {
    let newId = this.bandList.length;
    this.router.navigate(['/new/band/']);
  }

  back() : void {
    this.router.navigate(['..']);
  }

  reorderDiscs() : void {
    this.bandsService.setBandList(this.bandId, this.band);
  }
}
