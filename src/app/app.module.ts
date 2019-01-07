import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

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
import { EjercicioDirectivasComponent } from './components/ejercicios/ejercicio-directivas.component';

// Routing
import { Routing } from './app.routing';
import { ContactScreenComponent } from './components/contactos/contact-screen.component';

@NgModule({
  declarations: [
    AppComponent,
    ResaltarDirective,
    ContarClicksDirective,
    LugarListComponent,
    LugarDetailComponent,
    EjercicioDirectivasComponent,
    ContactScreenComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBGhvrQh2edYQi7AXdDYCA71Lb_YehPXTk'
    }),
    BrowserAnimationsModule,
    MyOwnCustomMaterialModule,
    Routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
