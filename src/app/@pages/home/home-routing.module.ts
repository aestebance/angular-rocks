import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home.component";
import {BandDetailComponent} from "./pages/band-detail/band-detail.component";
import {BandEditComponent} from "./pages/band-edit/band-edit.component";

const routes: Routes = [
  {
    path: '', component: HomeComponent, pathMatch: 'full'
  },
  {
    path: 'details/:bandId', component: BandDetailComponent
  },
  {
    path: 'edit/:bandId', component: BandEditComponent
  },
  {
    path: 'new/:bandId', component: BandEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
