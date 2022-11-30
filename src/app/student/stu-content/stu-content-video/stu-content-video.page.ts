import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Libro } from 'src/app/models/libro';
import { ParrafoService } from 'src/app/services/parrafo.service';
import { LibroService } from 'src/app/services/libro.service';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { ProgresoService } from 'src/app/services/progreso.service';
import { Progreso } from 'src/app/models/progreso';
import { EstudianteDetail } from 'src/app/models/estudiante';
import { CuestionarioService } from 'src/app/services/cuestionario.service';

@Component({
  selector: 'app-stu-content-video',
  templateUrl: './stu-content-video.page.html',
  styleUrls: ['./stu-content-video.page.scss'],
})
export class StuContentVideoPage implements OnInit {


/* eslint-disable @typescript-eslint/naming-convention */
libro: Libro = {
  id: 0,
  Titulo: '',
  Audio: '',
  Video: 'https://www.youtube.com/embed/LzMKOMwakVA?enablejsapi=1',
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
elurl;
existencia = 'no existe';
mensaje;
estado = '';
haycuestionario = true;
resolviocuestionario = false;
cuestionarios: any = [];
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
      this.progresoService.getProgresoidividual(parametro, parestudiante).subscribe(
        resprogreso => {
          if (resprogreso !== null) {
            this.progreso = resprogreso;
          } else {
            this.progresocreate.LibroId = parametro;
            this.progresocreate.EstudianteId = parestudiante;
            this.progresocreate.Progreso = '10';
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
    if (this.haycuestionario === true) {
      this.estado = 'en progreso';
      if (this.progreso.Comentario !== '' && this.progreso.FinalAlternativo !== '') {
        this.progreso.Progreso = '90';
      } else if (this.progreso.Comentario === '' && this.progreso.FinalAlternativo !== '') {
        this.progreso.Progreso = '80';
      } else if (this.progreso.Comentario !== '' && this.progreso.FinalAlternativo === '') {
        this.progreso.Progreso = '60';
      } else if (this.progreso.Comentario === '' && this.progreso.FinalAlternativo === '') {
        this.progreso.Progreso = '40';
      }
    } else {
      this.estado = 'en progreso';
      if (this.progreso.Comentario !== '' && this.progreso.FinalAlternativo !== '') {
        this.progreso.Progreso = '100';
        this.estado = 'terminado';
      } else if (this.progreso.Comentario === '' && this.progreso.FinalAlternativo !== '') {
        this.progreso.Progreso = '90';
      } else if (this.progreso.Comentario !== '' && this.progreso.FinalAlternativo === '') {
        this.progreso.Progreso = '70';
      } else if (this.progreso.Comentario === '' && this.progreso.FinalAlternativo === '') {
        this.progreso.Progreso = '50';
      }
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