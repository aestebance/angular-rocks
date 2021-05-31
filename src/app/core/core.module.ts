import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SearchBarComponent } from './header/components/search-bar/search-bar.component';
import {ButtonModule} from "primeng/button";


@NgModule({
    declarations: [
        HeaderComponent,
        FooterComponent,
        SearchBarComponent
    ],
    exports: [
        HeaderComponent,
        FooterComponent
    ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    ButtonModule
  ]
})
export class CoreModule { }
