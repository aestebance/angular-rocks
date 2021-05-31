import { Component, OnInit, Input } from '@angular/core';
import {PrimeNGConfig} from "primeng/api";

@Component({
  selector: 'app-band-item',
  templateUrl: './band-item.component.html',
  styleUrls: ['./band-item.component.scss']
})
export class BandItemComponent implements OnInit {
  @Input() band : any;
  @Input() index: any;

  text: string = "";

  constructor(private primengConfig: PrimeNGConfig) { }

  ngOnInit(): void {
    this.primengConfig.ripple = true;
    this.text = this.band.description.substring(0, 150) + '...';
  }

}
