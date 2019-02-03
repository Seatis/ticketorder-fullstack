import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  public typedPassword: string = '';
  public wrongPasswordText: string = '';

  constructor(public auth: AuthService, private router: Router) { }

  public ngOnInit(): void {
  }

  public navigateToDashboard(): void {
    this.auth.password = this.typedPassword;
    if (this.auth.invalidPassword) {
      this.wrongPasswordText = 'Hibás jelszó, próbáld újra!'
    }
    this.router.navigate(['dashboard']);
  }

}
