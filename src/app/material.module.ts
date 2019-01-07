import { NgModule } from '@angular/core';
import {
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
} from '@angular/material';


const modules = [
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
];

@NgModule({
    imports: modules,
    exports: modules,
})

export class MyOwnCustomMaterialModule {}
