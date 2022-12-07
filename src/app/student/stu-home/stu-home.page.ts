/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EstudianteDetail } from 'src/app/models/estudiante';

@Component({
  selector: 'app-stu-home',
  templateUrl: './stu-home.page.html',
  styleUrls: ['./stu-home.page.scss'],
})
export class StuHomePage implements OnInit {
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
  clientetipo;
  cliente;
  genero = false;
  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
    this.cliente = JSON.parse(localStorage.getItem('usuario'));
    this.estudiante = this.cliente;
    if (this.estudiante.Genero === 'Femenino') {
      this.genero = true;
    } else {
      this.genero = false;
    }
  }
  gohome() {
    this.router.navigate(
      [
        'student',
        'stu-home'
      ]
    );
  }
  readbook() {
    this.router.navigate(
      [
        'student',
        'stu-content'
      ]
    );
  }
  viewprofile() {
    this.router.navigate(
      [
        'student',
        'stu-detail'
      ]
    );
  }
  addbook() {
    this.router.navigate(
      [
        'student',
        'stu-book'
      ]
    );
  }
}
