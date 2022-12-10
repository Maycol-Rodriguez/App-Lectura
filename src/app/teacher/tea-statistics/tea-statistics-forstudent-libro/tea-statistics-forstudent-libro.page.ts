/* eslint-disable @typescript-eslint/naming-convention */
import { IonSlides } from '@ionic/angular';
import { Libro } from 'src/app/models/libro';
import { Progreso } from 'src/app/models/progreso';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
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
  @ViewChild(IonSlides, { static: true }) slides: IonSlides;
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
    centeredSlides: true,
    loop: true,
    spaceBetween: 10,
    grabCursor: true,
    initialSlide: 0,
    speed: 500
  };
  existencia = 'no existe';
  mensaje;
  estado = '';
  haycuestionario = false;
  resolviocuestionario = false;
  cuestionarios: any = [];
  validacionultimoslide;
  constructor(
    private router: Router,
    private libroService: LibroService,
    private activatedRoute: ActivatedRoute,
    private parrafoService: ParrafoService,
    private progresoService: ProgresoService,
    private cuestionarioService: CuestionarioService,
  ) { }
  ngOnInit() {
    const codigoestudiante = this.activatedRoute.snapshot.paramMap.get('estudiante');
    const codigolibro = this.activatedRoute.snapshot.paramMap.get('libro');
    this.libroService.getLibro(codigolibro).subscribe(
      reslibro => {
        this.libro = reslibro;
        this.cuestionarioService.getsearchCuestionariobylibro(codigolibro).subscribe(
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
        this.progresoService.getProgresoidividual(codigolibro, codigoestudiante).subscribe(
          resprogreso => {
            if (resprogreso !== null) {
              this.progreso = resprogreso;
            }
          }, err => {
            console.log('Error get proceso by libro y alumno');
          }
        );
        // sacar el progreso mediante libro y estudiante
        this.parrafoService.getsearchParrafobylibro(codigolibro).subscribe(
          resparrafos => {
            this.parrafos = resparrafos;
          }, err => {
            console.log('Error get parrafos by libro id');
          }
        );
      }, err => {
        console.log('Error get libro by id');
      }
    );
  }
  chekarcuestionario(dato) {
    this.router.navigate(
      [
        'teacher',
        'tea-statistics',
        'tea-statistics-forstudent-cuestionario',
        dato
      ]
    );
  }
}
