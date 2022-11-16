
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Responsable } from 'src/app/models/responsable';

@Component({
  selector: 'app-stu-content-accompanying',
  templateUrl: './stu-content-accompanying.page.html',
  styleUrls: ['./stu-content-accompanying.page.scss'],
})
export class StuContentAccompanyingPage implements OnInit {
  /* eslint-disable @typescript-eslint/naming-convention */
  dato = '';
  responsable: Responsable = {
    id: 0,
    Nombre: '',
    Apellido: '',
    Genero: '',
    Documento: ''
  };
  verformulario = false;
  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }
  solitario() {
    this.verformulario = false;
    this.router.navigate(
      [
        'student',
        'stu-content',
        'stu-content-select'
      ]
    );
  }
  acompaniado() {
    this.verformulario = true;
  }
  iraseleccionar() {
    this.router.navigate(
      [
        'student',
        'stu-content',
        'stu-content-select'
      ]
    );
  }

}
