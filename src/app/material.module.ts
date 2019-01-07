import { NgModule } from '@angular/core';
import {
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule
} from '@angular/material';


const modules = [
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule
];

@NgModule({
    imports: modules,
    exports: modules,
})

export class MyOwnCustomMaterialModule {}
