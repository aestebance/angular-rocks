import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import {HomeComponent} from "./home.component";
import { BandItemComponent } from './components/band-item/band-item.component';
import {CoreModule} from "../../core/core.module";
import { BandDetailComponent } from './pages/band-detail/band-detail.component';
import { BandEditComponent } from './pages/band-edit/band-edit.component';
import { BandsGalleryComponent } from './components/bands-gallery/bands-gallery.component';
import { YoutubePlayerComponent } from './pages/band-detail/components/youtube-player/youtube-player.component';
import {YouTubePlayerModule} from '@angular/youtube-player';
import {CardModule} from "primeng/card";
import {ButtonModule} from "primeng/button";

@NgModule({
  declarations: [HomeComponent, BandItemComponent, BandDetailComponent, BandEditComponent, BandsGalleryComponent, YoutubePlayerComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CoreModule,
    YouTubePlayerModule,
    CardModule,
    ButtonModule
  ]
})
export class HomeModule { }

let apiLoaded = false;
