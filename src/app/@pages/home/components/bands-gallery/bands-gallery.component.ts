import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-bands-gallery',
  templateUrl: './bands-gallery.component.html',
  styleUrls: ['./bands-gallery.component.scss']
})
export class BandsGalleryComponent implements OnInit {
  @Input() bandList: any;

  constructor() { }

  ngOnInit(): void {
  }

}
