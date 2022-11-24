import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-family',
  templateUrl: './family.page.html',
  styleUrls: ['./family.page.scss'],
})
export class FamilyPage implements OnInit {
  genero = false;
  clientetipo;
  cliente;
  public studentPages = [
    { title: 'Inicio', url: '/family/fam-home', icon: 'home' },
    { title: 'Lectura de libros', url: '/family/fam-content', icon: 'library' },
    { title: 'Agregar Libro o Cuento', url: '/family/fam-book', icon: 'library' },
    { title: 'Perfil', url: '/family/fam-detail', icon: 'person' }
  ];
  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
  ) { }

  ngOnInit() {
    this.cliente = JSON.parse(localStorage.getItem('usuario'));
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
    }
  }
  logout() {
    this.authenticationService.loggout();
    this.router.navigate(
      [
        'auth'
      ]
    );
  }
}
