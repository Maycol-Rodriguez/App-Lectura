/* eslint-disable @typescript-eslint/naming-convention */
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {
  clientetipo;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.clientetipo = JSON.parse(localStorage.getItem('tipoclient'));
    if (this.clientetipo === 'estudiante') {
      console.log('el usuario es estudiante');
      this.router.navigate(
        [
          'student'
        ]
      );
    } else if (this.clientetipo === 'profesor') {
      console.log('el usuario es profesor');
      this.router.navigate(
        [
          'teacher'
        ]
      );
    } else if (this.clientetipo === 'resposable') {
      console.log('el usuario es resposable');
      this.router.navigate(
        [
          'family',
        ]
      );
    }
  }

}
