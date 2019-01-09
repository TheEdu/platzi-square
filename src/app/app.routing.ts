import { Routes, RouterModule } from '@angular/router';
import { LugarListComponent } from './components/lugares/lugar-list/lugar-list.component';
import { LugarDetailComponent } from './components/lugares/lugar-detail/lugar-detail.component';
import { LugarCrearComponent } from './components/lugares/lugar-crear/lugar-crear.component';
import { EjercicioDirectivasComponent } from './components/ejercicios/ejercicio-directivas.component';
import { ContactScreenComponent } from './components/contactos/contact-screen.component';
import { AuthSigninComponent } from './components/auth/auth-signin/auth-signin.component';
import { AuthSignupComponent } from './components/auth/auth-signup/auth-signup.component';
import { MyGuard } from './services/my-guard.service';

const APP_ROUTES: Routes = [
    { path: '', component: LugarListComponent, pathMatch: 'full' },
    { path: 'detalle/:id', component: LugarDetailComponent },
    { path: 'ejercicio/directivas', component: EjercicioDirectivasComponent },
    { path: 'contacto', component: ContactScreenComponent },
    { path: 'crear', component: LugarCrearComponent, canActivate:[MyGuard]},
    { path: 'editar/:id', component: LugarCrearComponent },
    { path: 'signin', component: AuthSigninComponent },
    { path: 'signup', component: AuthSignupComponent }
];

export const Routing = RouterModule.forRoot(APP_ROUTES);