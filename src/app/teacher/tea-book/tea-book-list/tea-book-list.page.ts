/* eslint-disable @typescript-eslint/naming-convention */
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ProfesorDetail } from 'src/app/models/profesor';
import { PublicacionService } from 'src/app/services/publicacion.service';

@Component({
  selector: 'app-tea-book-list',
  templateUrl: './tea-book-list.page.html',
  styleUrls: ['./tea-book-list.page.scss'],
})
export class TeaBookListPage implements OnInit {
  libros: any = [];
  profesor: ProfesorDetail = {
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
  cliente;
  constructor(
    private router: Router,
    private publicacionService: PublicacionService,
  ) { }
  crear() {
    this.router.navigate(
      [
        'teacher',
        'tea-book',
        'tea-book-create'
      ]
    );
  }
  edit(dato) {
    this.router.navigate(
      [
        'teacher',
        'tea-book',
        'tea-book-update',
        dato
      ]
    );
  }
  ngOnInit() {
    this.cliente = JSON.parse(localStorage.getItem('usuario'));
    this.profesor = this.cliente;
    this.publicacionService.getsearchPublicacionbygrado(this.profesor.GradoId).subscribe(
      reslibros => {
        this.libros = reslibros;
      }, err => {
        console.log('Error get all libros');
      }
    );

  }

}
