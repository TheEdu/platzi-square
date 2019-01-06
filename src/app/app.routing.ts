import { Routes, RouterModule } from '@angular/router';
import { LugarListComponent } from './components/lugares/lugar-list/lugar-list.component';
import { LugarDetailComponent } from './components/lugares/lugar-detail/lugar-detail.component';

const APP_ROUTES: Routes = [
    { path: '', component: LugarListComponent, pathMatch: 'full' },
    { path: 'detalle', component: LugarDetailComponent }
];

export const Routing = RouterModule.forRoot(APP_ROUTES);