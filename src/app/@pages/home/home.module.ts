import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import {HomeComponent} from "./home.component";
import { BandItemComponent } from './components/band-item/band-item.component';
import {CoreModule} from "../../core/core.module";
import { BandDetailComponent } from './pages/band-detail/band-detail.component';
import { BandEditComponent } from './pages/band-edit/band-edit.component';


@NgModule({
  declarations: [HomeComponent, BandItemComponent, BandDetailComponent, BandEditComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CoreModule
  ]
})
export class HomeModule { }
