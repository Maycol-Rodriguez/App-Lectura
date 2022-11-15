import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

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
    { title: 'Perfil', url: '/student/stu-profile', icon: 'person' }
  ];
  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.cliente = JSON.parse(localStorage.getItem('usuario'));
    this.clientetipo = JSON.parse(localStorage.getItem('tipoclient'));
    if (this.clientetipo === 'estudiante') {
      console.log('el usuario es estudiante');
    } else if (this.clientetipo === 'profesor') {
      this.router.navigate(
        [
          'teacher',
          'tea-home'
        ]
      );
      console.log('el usuario es profesor');
    } else if (this.clientetipo === 'resposable') {
      console.log('el usuario es resposable');
      this.router.navigate(
        [
          'family',
          'fam-home'
        ]
      );
    }
  }
  logout() {
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
