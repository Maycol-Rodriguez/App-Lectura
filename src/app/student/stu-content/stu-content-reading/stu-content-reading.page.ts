 /* eslint-disable @typescript-eslint/naming-convention */
import { Router } from '@angular/router';
import { IonSlides } from '@ionic/angular';
import { Libro } from 'src/app/models/libro';
import { Progreso } from 'src/app/models/progreso';
import { EstudianteDetail } from 'src/app/models/estudiante';
import { Component, OnInit, ViewChild } from '@angular/core';
import { LibroService } from 'src/app/services/libro.service';
import { ParrafoService } from 'src/app/services/parrafo.service';
import { ProgresoService } from 'src/app/services/progreso.service';
import { CuestionarioService } from 'src/app/services/cuestionario.service';


@Component({
  selector: 'app-stu-content-reading',
  templateUrl: './stu-content-reading.page.html',
  styleUrls: ['./stu-content-reading.page.scss'],
})
export class StuContentReadingPage implements OnInit {
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
    // slidesPerView: 1,
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
    private parrafoService: ParrafoService,
    private progresoService: ProgresoService,
    private cuestionarioService: CuestionarioService,
  ) { }
  ngOnInit() {
    const parametro = JSON.parse(localStorage.getItem('ellibro'));
    const parestudiante = JSON.parse(localStorage.getItem('usuario'));
    this.libroService.getLibro(parametro).subscribe(
      reslibro => {
        this.libro = reslibro;
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
            } else {
              this.progresocreate.LibroId = parametro;
              this.progresocreate.EstudianteId = parestudiante.id;
              this.progresocreate.Progreso = 0;
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
  slideChanged(event) {
    this.slides.isEnd().then(
      (istrue) => {
        if (istrue) {
          this.validacionultimoslide = 'termino';
          if (this.progreso.Progreso === 0) {
            this.progreso.Progreso = 50;
          }
        } else {
          this.validacionultimoslide = 'aun no termino';
        }
      }
    );
  }
  validarprogreso() {
    if (this.progreso.Progreso < 100) {
      if (this.progreso.Progreso === 50) {
        if (this.progreso.Comentario.length > 10) {
          this.progreso.Progreso = this.progreso.Progreso + 20;
        }
        if (this.progreso.FinalAlternativo.length > 20) {
          this.progreso.Progreso = this.progreso.Progreso + 30;
        }
      }
      if (this.progreso.Progreso === 70) {
        if (this.progreso.FinalAlternativo.length > 20) {
          this.progreso.Progreso = this.progreso.Progreso + 30;
        }
      }
      if (this.progreso.Progreso === 80) {
        if (this.progreso.Comentario.length > 10) {
          this.progreso.Progreso = this.progreso.Progreso + 20;
        }
      }
    } else {
      this.progreso.Progreso = 100;
    }
  }
  actualizar(dato) {
    this.validarprogreso();
    this.progresoService.updateProgreso(dato, this.progreso).subscribe(
      resupdate => {
        this.mensaje = resupdate;
      }, err => {
        console.log('Error Update Progreso');
      }
    );
  }
  iracuestionario(dato) {
    this.actualizar(dato);
    this.router.navigate(
      [
        'student',
        'stu-content',
        'stu-content-evaluation'
      ]
    );
  }

  terminar(dato) {
    this.actualizar(dato);
    this.router.navigate(
      [
        'student',
        'stu-content'
      ]
    );
  }
}
