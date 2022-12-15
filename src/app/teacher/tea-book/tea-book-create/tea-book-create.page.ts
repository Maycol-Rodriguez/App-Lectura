/* eslint-disable @typescript-eslint/naming-convention */
import { Router } from '@angular/router';
import { Libro } from 'src/app/models/libro';
import { Parrafo } from 'src/app/models/parrafo';
import { Component, OnInit } from '@angular/core';
import { Publicacion } from 'src/app/models/publicacion';
import { ProfesorDetail } from 'src/app/models/profesor';
import { TipoService } from 'src/app/services/tipo.service';
import { EstudianteDetail } from 'src/app/models/estudiante';
import { LibroService } from 'src/app/services/libro.service';
import { ParrafoService } from 'src/app/services/parrafo.service';
import { EstudianteService } from 'src/app/services/estudiante.service';
import { PublicacionService } from 'src/app/services/publicacion.service';

@Component({
  selector: 'app-tea-book-create',
  templateUrl: './tea-book-create.page.html',
  styleUrls: ['./tea-book-create.page.scss'],
})
export class TeaBookCreatePage implements OnInit {
  parrafos: any = [];
  tipos: any = [];
  estudiantes: any = [];
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
  eleccion;
  constructor(
    private router: Router,
    private tipoService: TipoService,
    private libroService: LibroService,
    private parrafoService: ParrafoService,
    private estudianteService: EstudianteService,
    private publicacionService: PublicacionService,
  ) { }
  elegir(par) {
    this.eleccion = par;
  }
  onOptionsSelectEstudiante(event: any){
    const value = event.target.value;
    this.selecionarestudiantes(value);
  }
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
  savelibrovideo() {
    this.libroService.saveLibro(this.libro).subscribe(
      reslibro => {
        this.libro1 = reslibro;
        this.codigolibro = this.libro1.id;
        this.publicacion.Procedencia = 'interna';
        this.publicacion.LibroId = this.codigolibro;
        this.publicacion.FechaRegistro = new Date();
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
      }, err => {
        console.log('Error save Libro');
      }
    );
  }
  savelibroaudio() {
    this.libroService.saveLibro(this.libro).subscribe(
      reslibro => {
        this.libro1 = reslibro;
        this.codigolibro = this.libro1.id;
        this.publicacion.Procedencia = 'interna';
        this.publicacion.LibroId = this.codigolibro;
        this.publicacion.FechaRegistro = new Date();
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
      }, err => {
        console.log('Error save Libro');
      }
    );
  }
  savepublicacion() {
    this.publicacion.Procedencia = 'interna';
    this.publicacion.FechaRegistro = new Date();
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
  selecionarestudiantes(dato) {
    this.estudianteService.getEstudiante(dato).subscribe(
      resestudiante => {
        this.estudiante = resestudiante;
        this.publicacion.EstudianteId = this.estudiante.id;
        this.publicacion.GradoDestino = this.estudiante.grado.Nombre;
        if (this.libro.Autor === '') {
          this.libro.Autor = this.estudiante.Nombre + ' ' + this.estudiante.Apellido;
        }
      }, err => {
        console.log('Error get estudiante');
      }
    );
  }
  ngOnInit() {
    this.gettipos();
    this.cliente = JSON.parse(localStorage.getItem('usuario'));
    this.profesor = this.cliente;
    this.estudianteService.getsearchEstudiantebygrado(this.profesor.GradoId, this.profesor.Seccion).subscribe(
      resestudiante => {
        this.estudiantes = resestudiante;
      }, err => {
        console.log('Error get estudiante by profe');
      }
    );
  }
}
