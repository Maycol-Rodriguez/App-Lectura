/* eslint-disable @typescript-eslint/naming-convention */
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ProfesorDetail } from 'src/app/models/profesor';

@Component({
  selector: 'app-tea-home',
  templateUrl: './tea-home.page.html',
  styleUrls: ['./tea-home.page.scss'],
})
export class TeaHomePage implements OnInit {
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
  clientetipo;
  cliente;
  genero = false;
  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
    this.cliente = JSON.parse(localStorage.getItem('usuario'));
    this.profesor = this.cliente;
    if (this.profesor.Genero === 'Femenino') {
      this.genero = true;
    } else {
      this.genero = false;
    }
  }

  viewstatics() {
    this.router.navigate(
      [
        'teacher',
        'tea-statistics'
      ]
    );
  }
  addbook() {
    this.router.navigate(
      [
        'teacher',
        'tea-book'
      ]
    );
  }

}
