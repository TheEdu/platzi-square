import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AgmCoreModule } from '@agm/core';

import { ResaltarDirective } from './directives/resaltar.directive';
import { ContarClicksDirective } from './directives/contar-clicks.directive';

// Material Angular
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MyOwnCustomMaterialModule } from './material.module';

// Custom Components
import { LugarListComponent } from './components/lugares/lugar-list/lugar-list.component';
import { LugarDetailComponent } from './components/lugares/lugar-detail/lugar-detail.component';
import { LugarCrearComponent } from './components/lugares/lugar-crear/lugar-crear.component';
import { EjercicioDirectivasComponent } from './components/ejercicios/ejercicio-directivas.component';
import { AuthSigninComponent } from './components/auth/auth-signin/auth-signin.component';
import { AuthSignupComponent } from './components/auth/auth-signup/auth-signup.component';

// Routing
import { Routing } from './app.routing';
import { ContactScreenComponent } from './components/contactos/contact-screen.component';

// Services
import { LugaresService } from './services/lugar.service';
import { AutorizacionService } from './services/autorizacion.service';

// FireBase
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule} from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';

const firebase =  {
  apiKey: 'AIzaSyDaTOC9fCCpfZ5nyXLEoG99BBcwv6lr3k0',
  authDomain: 'platzi-square-1546451411606.firebaseapp.com',
  databaseURL: 'https://platzi-square-1546451411606.firebaseio.com',
  projectId: 'platzi-square-1546451411606',
  storageBucket: 'platzi-square-1546451411606.appspot.com',
  messagingSenderId: '1059538345571'
};

@NgModule({
  declarations: [
    AppComponent,
    ResaltarDirective,
    ContarClicksDirective,
    LugarListComponent,
    LugarDetailComponent,
    EjercicioDirectivasComponent,
    ContactScreenComponent,
    LugarCrearComponent,
    AuthSigninComponent,
    AuthSignupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBGhvrQh2edYQi7AXdDYCA71Lb_YehPXTk'
    }),
    BrowserAnimationsModule,
    MyOwnCustomMaterialModule,
    Routing,
    AngularFireModule.initializeApp(firebase, 'platzi-square'), // imports firebase/app needed for everything
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireDatabaseModule,
    HttpClientModule
  ],
  providers: [
    LugaresService,
    AutorizacionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
