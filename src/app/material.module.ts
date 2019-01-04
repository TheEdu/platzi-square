import { NgModule } from '@angular/core';
import {
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatCardModule
} from '@angular/material';


const modules = [
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatCardModule
];

@NgModule({
    imports: modules,
    exports: modules,
})

export class MyOwnCustomMaterialModule {}
