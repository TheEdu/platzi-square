import { Routes, RouterModule } from '@angular/router';
import { LugarListComponent } from './components/lugares/lugar-list/lugar-list.component';
import { LugarDetailComponent } from './components/lugares/lugar-detail/lugar-detail.component';
import { LugarCrearComponent } from './components/lugares/lugar-crear/lugar-crear.component';
import { EjercicioDirectivasComponent } from './components/ejercicios/ejercicio-directivas.component';
import { ContactScreenComponent } from './components/contactos/contact-screen.component';

const APP_ROUTES: Routes = [
    { path: '', component: LugarListComponent, pathMatch: 'full' },
    { path: 'detalle/:id', component: LugarDetailComponent },
    { path: 'ejercicio/directivas', component: EjercicioDirectivasComponent },
    { path: 'contacto', component: ContactScreenComponent },
    { path: 'crear', component: LugarCrearComponent },
    { path: 'editar/:id', component: LugarCrearComponent }
];

export const Routing = RouterModule.forRoot(APP_ROUTES);
