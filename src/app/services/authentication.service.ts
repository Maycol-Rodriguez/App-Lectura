import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  client = new BehaviorSubject<any>(null);
  tipoclient = new BehaviorSubject<string>(null);
  client$ = this.client.asObservable();
  tipoclient$ = this.tipoclient.asObservable();
  constructor(
    private http: HttpClient
  ) { }
  loggin(client, tipo) {
    console.log(client, tipo);
    const cli = JSON.stringify(client);
    const typecli = JSON.stringify(tipo);
    this.client.next(client);
    this.tipoclient.next(typecli);
    localStorage.setItem('usuario', cli);
    localStorage.setItem('tipoclient', typecli);
  }
  loggout() {
    this.client.next(null);
    this.tipoclient.next(null);
    localStorage.removeItem('usuario');
    localStorage.removeItem('tipoclient');
  }
  isLoggedIn(): boolean {
    if (localStorage.getItem('usuario')) {
      console.log('hay usuario');
      const clitipe = JSON.parse(localStorage.getItem('tipoclient'));
      if (clitipe === 'estudiante') {
        console.log('el usuario es estudiante');
      } else if (clitipe === 'profesor') {
        console.log('el usuario es profesor');
      } else if (clitipe === 'resposable') {
        console.log('el usuario es resposable');
      } else {

      }
      return true;
    } else {
      console.log('¿no hay usuario');
      return false;
    }
  }
}
