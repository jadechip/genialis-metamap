import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MapComponent } from "./map.component";

const MAP_ROUTE = [
    { path: '', component: MapComponent }
];

@NgModule ({
    declarations: [
        MapComponent        
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(MAP_ROUTE)
    ]
})

export class MapModule {  }