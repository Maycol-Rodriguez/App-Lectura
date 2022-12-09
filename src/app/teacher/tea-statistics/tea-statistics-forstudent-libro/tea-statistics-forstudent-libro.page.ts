/* eslint-disable @typescript-eslint/naming-convention */
import { Router } from '@angular/router';
import { Libro } from 'src/app/models/libro';
import { Component, OnInit } from '@angular/core';
import { Progreso } from 'src/app/models/progreso';
import { DomSanitizer } from '@angular/platform-browser';
import { DataService } from 'src/app/services/data.service';
import { EstudianteDetail } from 'src/app/models/estudiante';
import { LibroService } from 'src/app/services/libro.service';
import { ParrafoService } from 'src/app/services/parrafo.service';
import { ProgresoService } from 'src/app/services/progreso.service';
import { CuestionarioService } from 'src/app/services/cuestionario.service';
@Component({
  selector: 'app-tea-statistics-forstudent-libro',
  templateUrl: './tea-statistics-forstudent-libro.page.html',
  styleUrls: ['./tea-statistics-forstudent-libro.page.scss'],
})
export class TeaStatisticsForstudentLibroPage implements OnInit {

  libro: Libro = {
    id: 0,
    Titulo: '',
    Audio: '',
    Video: '',
    Imagen: '',
    Autor: ''
  };
  progreso: Progreso = {
    id: 0,
    Progreso: 0,
    Reaccion: '',
    Comentario: '',
    FinalAlternativo: '',
    FechaLectura: new Date(),
    NotaCuestionario: 0,
    NumeroIntento: 0,
    LibroId: 0,
    EstudianteId: 0
  };
  progresocreate: Progreso = {
    Progreso: 0,
    Reaccion: '',
    Comentario: '',
    FinalAlternativo: '',
    FechaLectura: new Date(),
    NotaCuestionario: 0,
    NumeroIntento: 0,
    LibroId: 0,
    EstudianteId: 0
  };
  estudiante: EstudianteDetail = {
    id: 0,
    Nombre: '',
    Apellido: '',
    Genero: '',
    Documento: '',
    GradoId: 0,
    grado: {
      id: 0,
      Nombre: '',
    },
  };
  parrafos: any = [];
  elurl;
  elurlvideo;
  elurlaudio;
  slideOpts = {
    slidesPerView: 1,
    centeredSlides: true,
    loop: true,
    spaceBetween: 10,
    grabCursor: true,
    initialSlide: 1,
    speed: 400
  };
  existencia = 'no existe';
  mensaje;
  estado = '';
  haycuestionario = false;
  resolviocuestionario = false;
  cuestionarios: any = [];
  videofin=false;
  // en progreso
  // finalizado
  constructor(
    private router: Router,
    private sanitizer: DomSanitizer,
    private datoService: DataService,
    private libroService: LibroService,
    private parrafoService: ParrafoService,
    private progresoService: ProgresoService,
    private cuestionarioService: CuestionarioService,
  ) { }

  ngOnInit() {
    const parametro = JSON.parse(localStorage.getItem('ellibro'));
    const parestudiante = JSON.parse(localStorage.getItem('usuario'));
    console.log(parametro);
    this.libroService.getLibro(parametro).subscribe(
      reslibro => {
        this.libro = reslibro;
        console.log(this.libro);
        const par = this.libro.Video;
        this.elurlvideo = this.sanitizer.bypassSecurityTrustResourceUrl(par);
        // this.elurlaudio = this.sanitizer.bypassSecurityTrustResourceUrl(this.libro.Audio);
        this.cuestionarioService.getsearchCuestionariobylibro(parametro).subscribe(
          rescuestionarios => {
            if (Object.entries(rescuestionarios).length > 0) {
              this.cuestionarios = rescuestionarios;
              this.haycuestionario = true;
            } else {
              console.log('No hay Cuestionarios');
            }
          }, err => {
            console.log('Error get cuestionarios by libro');
          }
        );
        this.progresoService.getProgresoidividual(parametro, parestudiante.id).subscribe(
          resprogreso => {
            if (resprogreso !== null) {
              this.progreso = resprogreso;
              console.log(this.progreso);
            } else {
              this.progresocreate.LibroId = parametro;
              this.progresocreate.EstudianteId = parestudiante.id;
              this.progresocreate.Progreso = 0;
              console.log(this.progreso);
              this.progresoService.saveProgreso(this.progresocreate).subscribe(
                resnewprogreso => {
                  this.progreso = resnewprogreso;
                  this.estado = 'iniciado';
                  window.location.reload();
                }, err => {
                  console.log('Error create progreso');
                }
              );
            }
          }, err => {
            console.log('Error get proceso by libro y alumno');
          }
        );
        // sacar el progreso mediante libro y estudiante
        this.parrafoService.getsearchParrafobylibro(parametro).subscribe(
          resparrafos => {
            this.parrafos = resparrafos;
            console.log(this.parrafos);
          }, err => {
            console.log('Error get parrafos by libro id');
          }
        );
      }, err => {
        console.log('Error get libro by id');
      }
    );
  }
  elegir(dato) {
    this.progreso.Reaccion = dato;
  }
  deselegir() {
    this.progreso.Reaccion = '';
  }

  iracuestionario(dato) {
    this.router.navigate(
      [
        'teacher',
        'tea-statistics',
        'tea-statistics-forstudent-cuestionario'
      ]
    );
    // actualizamos el progreso
    // lo mandamos al cuestionario
  }

  terminar(dato) {
    this.router.navigate(
      [
        'teacher',
        'tea-statistics'
      ]
    );
  }
  pruebacuestionario() {
    this.router.navigate(
      [
        'teacher',
        'tea-statistics',
        'tea-statistics-forstudent-cuestionario'
      ]
    );
  }
  pruebafinalizar() {
    this.router.navigate(
      [
        'teacher',
        'tea-statistics'
      ]
    );
  }

}
