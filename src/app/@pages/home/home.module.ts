import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import {HomeComponent} from "./home.component";
import { BandItemComponent } from './components/band-item/band-item.component';
import {CoreModule} from "../../core/core.module";


@NgModule({
  declarations: [HomeComponent, BandItemComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CoreModule
  ]
})
export class HomeModule { }
