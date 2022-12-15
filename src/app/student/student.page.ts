/* eslint-disable @typescript-eslint/naming-convention */
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { EstudianteDetail } from '../models/estudiante';

@Component({
  selector: 'app-student',
  templateUrl: './student.page.html',
  styleUrls: ['./student.page.scss'],
})
export class StudentPage implements OnInit {
  estudiante: EstudianteDetail = {
    id: 0,
    Nombre:'' ,
    Apellido: '',
    Genero:'' ,
    Documento: '',
    Seccion: '',
    GradoId: 0,
    grado: {
      id: 0,
      Nombre: ''
    }
  };
  genero = false;
  clientetipo;
  cliente;
  public studentPages = [
    { title: 'Inicio', url: '/student/stu-home', icon: 'home' },
    { title: 'Lectura de libros', url: '/student/stu-content', icon: 'library' },
    // { title: 'Agregar Libro o Cuento', url: '/student/stu-book', icon: 'library' },
    { title: 'Perfil', url: '/student/stu-detail', icon: 'person' },
    { title: 'Configuracion', url: '/student/stu-profile/stu-profile-edit', icon: 'settings' }
  ];
  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
  ) { }

  ngOnInit() {
    this.cliente = JSON.parse(localStorage.getItem('usuario'));
    this.clientetipo = JSON.parse(localStorage.getItem('tipoclient'));
    this.estudiante = this.cliente;
    if (this.estudiante.Genero === 'Femenino') {
      this.genero = true;
    } else {
      this.genero = false;
    }
    if (this.clientetipo === 'estudiante') {
      console.log('el usuario es estudiante');
    } else if (this.clientetipo === 'profesor') {
      console.log('el usuario no es estudiante, es profesor; redirigiendolo');
      this.router.navigate(
        [
          'teacher'
        ]
      );
    } else if (this.clientetipo === 'responsable') {
      console.log('el usuario no es estudiante, es responsable; redirigiendolo');
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

  readbook() {

  }
  viewprofile() {

  }
  addbook() {

  }
}
