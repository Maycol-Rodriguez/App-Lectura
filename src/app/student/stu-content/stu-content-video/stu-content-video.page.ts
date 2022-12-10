import { Component, OnInit } from '@angular/core';
import { Libro } from 'src/app/models/libro';
import { LibroService } from 'src/app/services/libro.service';
import { Router } from '@angular/router';
import { ProgresoService } from 'src/app/services/progreso.service';
import { Progreso } from 'src/app/models/progreso';
import { EstudianteDetail } from 'src/app/models/estudiante';
import { CuestionarioService } from 'src/app/services/cuestionario.service';
import * as YTPlayer from 'yt-player';
import { interval, merge, fromEvent } from 'rxjs';
import { mapTo } from 'rxjs/operators';

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
  constructor(
    private router: Router,
    private libroService: LibroService,
    private progresoService: ProgresoService,
    private cuestionarioService: CuestionarioService,
  ) {}

  ngOnInit() {
  const player = new YTPlayer('#player', {
    height: '250',
    width: '310', controls: false} );
  player.setVolume(100);
  player.on('timeupdate', (seconds) => {
  const procc = seconds/player.getDuration();
    if (procc >= 0.95) {
    console.log('Video completado');
    this.progreso.Progreso = 50;
  }
  });
  const parametro = JSON.parse(localStorage.getItem('ellibro'));
  const parestudiante = JSON.parse(localStorage.getItem('usuario'));
  console.log(parametro);
  this.libroService.getLibro(parametro).subscribe(
    reslibro => {
      this.libro = reslibro;
      console.log(this.libro);
      const par = this.libro.Video;
      player.load(par); //URL
      this.cuestionarioService.getsearchCuestionariobylibro(parametro).subscribe(
        rescuestionarios => {
          if (Object.entries(rescuestionarios).length > 0) {
            this.cuestionarios = rescuestionarios;
            this.haycuestionario = true;
          } else {
            console.log('No hay Cuestionarios');
          }
        });
        this.progresoService.getProgresoidividual(parametro, parestudiante.id).subscribe(
          resprogreso => {
            if (resprogreso !== null) {
              this.progreso = resprogreso;
            } else {
              this.progresocreate.LibroId = parametro;
              this.progresocreate.EstudianteId = parestudiante;
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
      if (this.progreso.Progreso === 50) {
        if (this.progreso.Comentario.length > 10) {
          this.progreso.Progreso = this.progreso.Progreso + 20;
        }
        if (this.progreso.FinalAlternativo.length > 20) {
          this.progreso.Progreso = this.progreso.Progreso + 30;
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
