 /* eslint-disable @typescript-eslint/naming-convention */
import { Router } from '@angular/router';
import { Libro } from 'src/app/models/libro';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Progreso } from 'src/app/models/progreso';
import { DomSanitizer } from '@angular/platform-browser';
import { DataService } from 'src/app/services/data.service';
import { EstudianteDetail } from 'src/app/models/estudiante';
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
  @ViewChild('elvideo') video: ElementRef;
  @ViewChild('elaudio') audio: ElementRef;
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
  validar() {
    const elvideo = this.video.nativeElement;
    const eltodo = elvideo.contentWindow.parent.document.body;
    const laclase = eltodo.querySelector('#video');
    console.log(laclase.ended);
    // class="video-stream html5-main-video"
    // const classe = elvideo.querySelector();
    // console.log(elvideo.contentWindow);
    // console.log(elvideo.contentWindow.document.body);
    // console.log(elvideo.contentWindow.parent.document);
    // console.log(elvideo.contentWindow.parent.document.body);
    // console.log(elvideo.contentWindow.parent.document.body.iframe);
    // if (elvideo.ended) {
    //   console.log('se termino el video');
    // } else {
    //   console.log('no se termino el video');
    // }
  }
  ngOnInit() {
    const parametro = JSON.parse(localStorage.getItem('ellibro'));
    const parestudiante = JSON.parse(localStorage.getItem('usuario'));
    console.log(parametro);
    this.libroService.getLibro(parametro).subscribe(
      reslibro => {
        this.libro = reslibro;
        console.log(this.libro);
        const par = this.libro.Video + '?autoplay=1&controls=0&rel=0';
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
  validarprogreso() {
    if (this.progreso.Progreso < 100) {
      if (this.progreso.Progreso <= 70) {
        // validar la vista del ultimo slider
        if (this.progreso.Progreso === 70) {
          if (this.progreso.Comentario === '') {
            this.progreso.Progreso = this.progreso.Progreso - 10;
          }
          if (this.progreso.FinalAlternativo === '') {
            this.progreso.Progreso = this.progreso.Progreso - 20;
          }
        } else if (this.progreso.Progreso === 60) {
          if (this.progreso.Comentario !== '') {
            this.progreso.Progreso = this.progreso.Progreso + 10;
          }
          if (this.progreso.FinalAlternativo === '') {
            this.progreso.Progreso = this.progreso.Progreso - 20;
          }
        } else if (this.progreso.Progreso === 50) {
          if (this.progreso.FinalAlternativo !== '') {
            this.progreso.Progreso = this.progreso.Progreso + 20;
          }
          if (this.progreso.Comentario === '') {
            this.progreso.Progreso = this.progreso.Progreso - 10;
          }
        } else if (this.progreso.Progreso === 40) {
          if (this.progreso.Comentario !== '') {
            this.progreso.Progreso = this.progreso.Progreso + 10;
          }
          if (this.progreso.FinalAlternativo !== '') {
            this.progreso.Progreso = this.progreso.Progreso + 20;
          }
        } else if (this.progreso.Progreso === 0) {
          this.progreso.Progreso = 40;
          // comprobar esar en el ultimo slide
          // comprobar finalizacion del video o audio
        }
      } else {
        this.progreso.Progreso = 70;
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
    // actualizamos el progreso
    // lo mandamos al cuestionario
  }

  terminar(dato) {
    this.actualizar(dato);
    this.router.navigate(
      [
        'student',
        'stu-home'
      ]
    );
  }
  pruebacuestionario() {
    this.router.navigate(
      [
        'student',
        'stu-content',
        'stu-content-evaluation'
      ]
    );
  }
  pruebafinalizar() {
    this.router.navigate(
      [
        'student',
        'stu-content'
      ]
    );
  }
}
