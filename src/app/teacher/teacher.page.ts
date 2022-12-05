/* eslint-disable @typescript-eslint/naming-convention */
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ProfesorDetail } from '../models/profesor';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.page.html',
  styleUrls: ['./teacher.page.scss'],
})
export class TeacherPage implements OnInit {
  profesor: ProfesorDetail = {
    id: 0,
    Nombre:'' ,
    Apellido: '',
    Genero:'' ,
    Documento: '',
    GradoId: 0,
    grado: {
      id: 0,
      Nombre: ''
    }
  };
  genero = false;
  clientetipo;
  cliente;
  public teacherPages = [
    { title: 'Inicio', url: '/teacher/tea-home', icon: 'home' },
    { title: 'Agregar Libro o Cuento', url: '/teacher/tea-book', icon: 'library' },
    { title: 'Estadisticas', url: '/teacher/tea-statistics', icon: 'person' }
  ];
  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
  ) { }

  ngOnInit() {
    console.log(localStorage.getItem('usuario'));
    console.log(JSON.parse(localStorage.getItem('usuario')));
    this.cliente = JSON.parse(localStorage.getItem('usuario'));
    this.clientetipo = JSON.parse(localStorage.getItem('tipoclient'));
    this.profesor = this.cliente;
    console.log(this.cliente);
    console.log(this.clientetipo);
    if (this.profesor.Genero === 'Femenino') {
      this.genero = true;
    } else {
      this.genero = false;
    }
    if (this.clientetipo === 'estudiante') {
      console.log('el usuario no es profesor, es estudiante; redirigiendolo');
      this.router.navigate(
        [
          'student'
        ]
      );
    } else if (this.clientetipo === 'profesor') {
      console.log('el usuario es profesor');
    } else if (this.clientetipo === 'responsable') {
      console.log('el usuario no es profesor, es responsable; redirigiendolo');
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
        'auth',
        'login'
      ]
    );
  }
}
