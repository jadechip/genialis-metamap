import { Routes, RouterModule } from '@angular/router';

const ROUTES: Routes = [
    { path: '', loadChildren: './layout/layout.module#LayoutModule' }
];

export const appRouting = RouterModule.forRoot(ROUTES);