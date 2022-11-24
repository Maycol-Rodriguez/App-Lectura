import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.page.html',
  styleUrls: ['./teacher.page.scss'],
})
export class TeacherPage implements OnInit {
  genero = false;
  clientetipo;
  cliente;
  public studentPages = [
    { title: 'Inicio', url: '/teacher/tea-home', icon: 'home' },
    { title: 'Lectura de libros', url: '/teacher/tea-content', icon: 'library' },
    { title: 'Agregar Libro o Cuento', url: '/teacher/tea-book', icon: 'library' },
    { title: 'Perfil', url: '/teacher/tea-detail', icon: 'person' }
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
    } else if (this.clientetipo === 'responsable') {
      console.log('el usuario es responsable');
      this.router.navigate(
        [
          'family',
        ]
      );
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
