import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const LAYOUT_ROUTES: Routes = [
    { path: '', component: LayoutComponent, children: [
      
        // Map
        { path: '', redirectTo: 'map', pathMatch: 'full' },
        { path: 'map', loadChildren: '../pages/map/map.module#MapModule' }

    ]}
];


export const LayoutRouting = RouterModule.forChild(LAYOUT_ROUTES);