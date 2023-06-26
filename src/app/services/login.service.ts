import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private userExample = {
    username: 'prueba',
    password: '123'
  };

  constructor() { }

  login(username: string, password: string): Promise<boolean> {

    if (username === this.userExample.username && password === this.userExample.password) {
      
      return Promise.resolve(true);
    } else {
      return Promise.reject('Invalid username or password');
    }
  }
}
