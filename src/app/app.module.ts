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

import { LugarListComponent } from './components/lugares/lugar-list/lugar-list.component';
import { LugarDetailComponent } from './components/lugares/lugar-detail/lugar-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ResaltarDirective,
    ContarClicksDirective,
    LugarListComponent,
    LugarDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBGhvrQh2edYQi7AXdDYCA71Lb_YehPXTk'
    }),
    BrowserAnimationsModule,
    MyOwnCustomMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
