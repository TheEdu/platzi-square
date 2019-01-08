import { NgModule } from '@angular/core';
import {
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatDividerModule
} from '@angular/material';


const modules = [
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatDividerModule
];

@NgModule({
    imports: modules,
    exports: modules,
})

export class MyOwnCustomMaterialModule {}
