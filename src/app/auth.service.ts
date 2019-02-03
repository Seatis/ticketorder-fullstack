import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public password: string;
  public invalidPassword: boolean = false;

  constructor() { }

  public isAuthenticated(): boolean {
    if (this.password === 'admin123') {
      this.invalidPassword = false;
      console.log('Belépve');
      return true;
    } else {
      this.invalidPassword = true;
    }
    // return true;
  }
}
