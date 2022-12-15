/* eslint-disable @typescript-eslint/naming-convention */
import { Router } from '@angular/router';
import { Libro } from 'src/app/models/libro';
import { Parrafo } from 'src/app/models/parrafo';
import { Component, OnInit } from '@angular/core';
import { Publicacion } from 'src/app/models/publicacion';
import { TipoService } from 'src/app/services/tipo.service';
import { LibroService } from 'src/app/services/libro.service';
import { ParrafoService } from 'src/app/services/parrafo.service';
import { PublicacionService } from 'src/app/services/publicacion.service';

@Component({
  selector: 'app-stu-book-create',
  templateUrl: './stu-book-create.page.html',
  styleUrls: ['./stu-book-create.page.scss'],
})
export class StuBookCreatePage implements OnInit {
  parrafos: any = [];
  tipos: any = [];
  libro: Libro = {
    Titulo: '',
    Audio: '',
    Video: '',
    Imagen: '',
    Autor: ''
  };
  libro1: Libro = {
    id: 0,
    Titulo: '',
    Audio: '',
    Video: '',
    Imagen: '',
    Autor: ''
  };
  parrafo: Parrafo = {
    Parrafo: '',
    Imagen: '',
    Tipoid: 0,
    LibroId: 0
  };
  parrafo1: Parrafo = {
    id: 0,
    Parrafo: '',
    Imagen: '',
    Tipoid: 0,
    LibroId: 0
  };
  publicacion: Publicacion = {
    Procedencia: '',
    FechaRegistro: new Date(),
    GradoDestino: '',
    LibroId: 0,
    EstudianteId: 0
  };
  publicacion1: Publicacion = {
    id: 0,
    Procedencia: '',
    FechaRegistro: new Date(),
    GradoDestino: '',
    LibroId: 0,
    EstudianteId: 0
  };
  creado = false;
  mostrarparrafos = false;
  porfinalizar = false;
  codigolibro;
  cliente;
  constructor(
    private router: Router,
    private tipoService: TipoService,
    private libroService: LibroService,
    private parrafoService: ParrafoService,
    private publicacionService: PublicacionService,
  ) { }
  onOptionsSelectTipo(event: any){
    const value = event.target.value;
    this.parrafo.Tipoid = value;
  }
  gettipos() {
    this.tipoService.getTipos().subscribe(
      restipos => {
        this.tipos = restipos;
      }, err => {
        console.log('Error get tipos');
      }
    );
  }
  saveLibro() {
    this.libroService.saveLibro(this.libro).subscribe(
      reslibro => {
        this.libro1 = reslibro;
        this.codigolibro = this.libro1.id;
        this.parrafo.LibroId = this.codigolibro;
        this.publicacion.LibroId = this.codigolibro;
        console.log(reslibro);
        this.creado = true;
        this.mostrarparrafos = true;
      }, err => {
        console.log('Error save Libro');
      }
    );
  }
  savepublicacion() {
    this.publicacion.Procedencia = 'interna';
    this.publicacion.FechaRegistro = new Date();
    this.publicacion.GradoDestino = this.cliente.grado.Nombre;
    this.publicacionService.savePublicacion(this.publicacion).subscribe(
      respublicacion => {
        this.publicacion1 = respublicacion;
        this.router.navigate(
          [
            'student',
            'stu-book',
            'stu-book-list'
          ]
        );
      }, err => {
        console.log('Error save publicacion');
      }
    );
  }
  getparrafos() {
    this.parrafoService.getsearchParrafobylibro(this.codigolibro).subscribe(
      resparrafos => {
        this.parrafos = resparrafos;
      }, err => {
        console.log('Error get parrafos by libro');
      }
    );
  }
  saveParrafo() {
    this.parrafoService.saveParrafo(this.parrafo).subscribe(
      resparrafo => {
        this.parrafo1 = resparrafo;
        this.getparrafos();
        this.porfinalizar = true;
      }, err => {
        console.log('Error save parrafo');
      }
    );
  }
  ngOnInit() {
    this.cliente = JSON.parse(localStorage.getItem('usuario'));
    this.libro.Autor = this.cliente.Nombre + ' ' + this.cliente.Apellido;
    const parametro = this.cliente.id;
    this.publicacion.EstudianteId = parametro;
    this.gettipos();
  }

}
