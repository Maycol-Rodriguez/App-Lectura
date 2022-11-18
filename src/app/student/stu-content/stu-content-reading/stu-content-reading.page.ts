import { DomSanitizer } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';
import { Libro } from 'src/app/models/libro';
import { ParrafoService } from 'src/app/services/parrafo.service';
import { LibroService } from 'src/app/services/libro.service';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { ProgresoService } from 'src/app/services/progreso.service';
import { Progreso } from 'src/app/models/progreso';
import { EstudianteDetail } from 'src/app/models/estudiante';

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
    Video: '',
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
  progreso1: Progreso = {
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
    this.elurl = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/uNjrPgnI9rI');
  }
  elegir(dato) {
    this.progreso.Reaccion = dato;
  }
  deselegir() {
    this.progreso.Reaccion = '';
  }
  validarprogreso(dato) {
    // progreso completado
    // progreso existente
    // no existe progreso => crear
  }
  actualizar(dato) {
    this.validarprogreso(dato);
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
