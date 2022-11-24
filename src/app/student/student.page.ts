import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.page.html',
  styleUrls: ['./student.page.scss'],
})
export class StudentPage implements OnInit {
  genero = false;
  clientetipo;
  cliente;
  public studentPages = [
    { title: 'Inicio', url: '/student/stu-home', icon: 'home' },
    { title: 'Lectura de libros', url: '/student/stu-content', icon: 'library' },
    { title: 'Agregar Libro o Cuento', url: '/student/stu-book', icon: 'library' },
    { title: 'Perfil', url: '/student/stu-detail', icon: 'person' }
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
    } else if (this.clientetipo === 'profesor') {
      this.router.navigate(
        [
          'teacher'
        ]
      );
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
