import { Component, OnInit } from '@angular/core';
import { AutorizacionService } from './../../../services/autorizacion.service';

@Component({
  selector: 'app-auth-signup',
  templateUrl: './auth-signup.component.html',
  styleUrls: ['./auth-signup.component.css']
})
export class AuthSignupComponent implements OnInit {

  email: string;
  password: string;

  constructor(private autorizacionService: AutorizacionService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.autorizacionService.registro(this.email, this.password);
  }

}
