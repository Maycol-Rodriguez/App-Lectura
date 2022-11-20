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

@Component({
  selector: 'app-stu-content-reading',
  templateUrl: './stu-content-reading.page.html',
  styleUrls: ['./stu-content-reading.page.scss'],
})
export class StuContentReadingPage implements OnInit {
  /* eslint-disable @typescript-eslint/naming-convention */
  libro: Libro = {
    id: 0,
    Titulo: '',
    Audio: '',
    Video: 'https://www.youtube.com/embed/uNjrPgnI9rI',
    Imagen: '',
    Autor: ''
  };
  progreso: Progreso = {
    id: 0,
    Progreso: '',
    Reaccion: '',
    Comentario: '',
    FinalAlternativo: '',
    FechaLectura: new Date(),
    NotaCuestionario: '',
    NumeroIntento: '',
    LibroId: 0,
    EstudianteId: 0
  };
  progresocreate: Progreso = {
    Progreso: '',
    Reaccion: '',
    Comentario: '',
    FinalAlternativo: '',
    FechaLectura: new Date(),
    NotaCuestionario: '',
    NumeroIntento: '',
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
  haycuestionario = true;
  resolviocuestionario = false;
  // en progreso
  // finalizado
  constructor(
    private router: Router,
    private sanitizer: DomSanitizer,
    private datoService: DataService,
    private libroService: LibroService,
    private parrafoService: ParrafoService,
    private progresoService: ProgresoService,
  ) { }

  ngOnInit() {
    const parametro = JSON.parse(localStorage.getItem('ellibro'));
    const parestudiante = JSON.parse(localStorage.getItem('usuario'));
    console.log(parametro);
    this.libroService.getLibro(parametro).subscribe(
      reslibro => {
        this.libro = reslibro;
        this.progresoService.getProgresoidividual(parametro, parestudiante).subscribe(
          resprogreso => {
            if (resprogreso !== null) {
              this.progreso = resprogreso;
            } else {
              this.progresocreate.LibroId = parametro;
              this.progresocreate.EstudianteId = parestudiante;
              // this.progresoService.saveProgreso(this.progresocreate).subscribe(
              //   resnewprogreso => {
              //     this.progreso = resnewprogreso;
              //     this.estado = 'iniciado';
              //   }, err => {
              //     console.log('Error create progreso');
              //   }
              // );
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
    this.elurl = this.sanitizer.bypassSecurityTrustResourceUrl(this.libro.Video);
  }
  elegir(dato) {
    this.progreso.Reaccion = dato;
  }
  deselegir() {
    this.progreso.Reaccion = '';
  }
  validarprogreso() {
    const parametro = +this.progreso.Progreso;
    if (parametro === 100) {
      this.estado = 'terminado';
    } else {
      if (this.progreso.Comentario !== '' && this.progreso.FinalAlternativo !== '') {
        if (this.haycuestionario === true) {
          this.estado = 'terminado';
        } else {
          this.estado = 'en progreso';
        }
        this.progreso.Progreso = '90';
      } else if (this.progreso.Comentario === '' && this.progreso.FinalAlternativo !== '') {
        this.progreso.Progreso = '80';
      } else if (this.progreso.Comentario !== '' && this.progreso.FinalAlternativo === '') {
        this.progreso.Progreso = '60';
      } else if (this.progreso.Comentario === '' && this.progreso.FinalAlternativo === '') {
        this.progreso.Progreso = '40';
      }
    }
    console.log(this.progreso);
    console.log(this.estado);
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
    // se valida primero
    // se actualiza el progreso existente
    // se actualiza en completado solo el comentario y el final alternativo
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
    // actualizamos el progreso
    // lo mandamos al home
  }
}
