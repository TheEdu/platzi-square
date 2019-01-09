import { Component, OnInit } from '@angular/core';
import { AutorizacionService } from './../../../services/autorizacion.service';

@Component({
  selector: 'app-auth-signin',
  templateUrl: './auth-signin.component.html',
  styleUrls: ['./auth-signin.component.css']
})
export class AuthSigninComponent implements OnInit {

  email: string;
  password: string;

  constructor(private autorizacionService: AutorizacionService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.autorizacionService.login(this.email, this.password);
  }

}
