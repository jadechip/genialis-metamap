import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutRouting } from "./layout.routing";

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';

import { LayoutComponent } from "./layout.component";
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  imports: [
    CommonModule,
    LayoutRouting,
    BsDropdownModule.forRoot(),
    ProgressbarModule.forRoot()
  ],
  declarations: [LayoutComponent, NavbarComponent, SidebarComponent]
})
export class LayoutModule { }
