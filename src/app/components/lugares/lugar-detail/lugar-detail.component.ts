import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lugar-detail',
  templateUrl: './lugar-detail.component.html',
  styleUrls: ['./lugar-detail.component.css']
})
export class LugarDetailComponent {
  detalleIndex: number;
  constructor(private route: ActivatedRoute) {
    this.detalleIndex = this.route.snapshot.params['id'];
    console.log(this.route.snapshot.params['id']);
  }
}
