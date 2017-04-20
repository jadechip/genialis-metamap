import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MapComponent } from "./map.component";
import { MapViewerComponent } from './map-viewer/map-viewer.component';

const MAP_ROUTE = [
    { path: '', component: MapComponent }
];

@NgModule ({
    declarations: [
        MapComponent,
        MapViewerComponent        
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(MAP_ROUTE)
    ]
})

export class MapModule {  }