/* eslint-disable @typescript-eslint/naming-convention */
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Progreso } from 'src/app/models/progreso';
import { Resolucion } from 'src/app/models/resolucion';
import { DataService } from 'src/app/services/data.service';
import { ProgresoService } from 'src/app/services/progreso.service';
import { ResolucionService } from 'src/app/services/resolucion.service';
import { CuestionarioService } from 'src/app/services/cuestionario.service';

@Component({
  selector: 'app-stu-content-evaluation',
  templateUrl: './stu-content-evaluation.page.html',
  styleUrls: ['./stu-content-evaluation.page.scss'],
})
export class StuContentEvaluationPage implements OnInit {
  cuestionarios: any = [];
  respuestas: any = [];
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
  resolucion: Resolucion = {
    Pregunta: '',
    RespuestaEscogida: '',
    NumeroIntento: '',
    Correcto: '',
    ProgresoId: 0
  };
  resolucion1: Resolucion = {
    id: 0,
    Pregunta: '',
    RespuestaEscogida: '',
    NumeroIntento: '',
    Correcto: '',
    ProgresoId: 0
  };
  formatopregunta = {
    id: 0,
    Pregunta: ''
  };
  respuesta = {
    id: 0,
    respuesta: ''
  };
  resoluciones: any = [];
  preguntas: any = [];
  lasrespuesas: any = [];
  respuestasdesordenadas: any = [];
  cuestionariofiltrado: any = [];
  nota;
  notaporpregunta;
  numeropreguntas;
  numeroaciertos = 0;
  codigoprogreso;
  mensaje;
  constructor(
    private router: Router,
    private datoService: DataService,
    private progresoService: ProgresoService,
    private resolucionService: ResolucionService,
    private cuestionarioService: CuestionarioService,
  ) { }

  ngOnInit() {
    const parametro = JSON.parse(localStorage.getItem('ellibro'));
    const parestudiante = JSON.parse(localStorage.getItem('usuario'));
    this.progresoService.getProgresoidividual(parametro, parestudiante.id).subscribe(
      resprogreso => {
        this.progreso = resprogreso;
        this.codigoprogreso = this.progreso.id;
        const parametrito = this.progreso.LibroId;
        this.cuestionarioService.getsearchCuestionariobylibro(parametrito).subscribe(
          rescuestionarios => {
            this.cuestionarios = rescuestionarios;
            this.numeropreguntas = this.cuestionarios.length;
            this.notaporpregunta = 20 / this.numeropreguntas;
            const elarray: any = this.cuestionarios;
            const array1: any = [];
            for (const item of elarray) {
              // eslint-disable-next-line prefer-const
              let formatodepregunta = {
                id: 0,
                pregunta: ''
              };
              // separamos la pregunta de sus respuestas
              formatodepregunta.id = item.id;
              formatodepregunta.pregunta = item.Pregunta;
              array1.push(formatodepregunta);
              this.preguntas = array1;
              // eslint-disable-next-line prefer-const
              let arrayrespuestas: any = [];
              // eslint-disable-next-line prefer-const
              let cajasimple: any = [];
              // desordenamos las respuestas
              arrayrespuestas.push(item.RespuestaCorrecta);
              arrayrespuestas.push(item.RespuestaIncorrecta1);
              arrayrespuestas.push(item.RespuestaIncorrecta2);
              arrayrespuestas.sort();
              cajasimple.push(arrayrespuestas);
              this.respuestasdesordenadas.push(cajasimple);
            }
            // console.log(this.preguntas);
            // console.log(this.respuestasdesordenadas);
            // guardamos todo orientado a objetos para no complicarnos
            for (let i = 0; i < this.numeropreguntas; i++) {
              // eslint-disable-next-line prefer-const
              let formatoconglomerado = {
                id: 0,
                Pregunta: '',
                Respuesta1: '',
                Respuesta2: '',
                Respuesta3: ''
              };
              formatoconglomerado.id = this.preguntas[i].id;
              formatoconglomerado.Pregunta = this.preguntas[i].pregunta;
              formatoconglomerado.Respuesta1 = this.respuestasdesordenadas[i][0][0];
              formatoconglomerado.Respuesta2 = this.respuestasdesordenadas[i][0][1];
              formatoconglomerado.Respuesta3 = this.respuestasdesordenadas[i][0][2];
              this.cuestionariofiltrado.push(formatoconglomerado);
            }
            console.log(this.cuestionariofiltrado);
          }, err => {
            console.log('Error get cuestionarios by libro');
          }
        );
      }, err => {
        console.log('Error get progeso by libro and usuario');
      }
    );
  }

  agregarrespuesta(dato, codigo) {
    let banderita = false;
    this.respuesta.id = codigo;
    this.respuesta.respuesta = dato;
    const parametro = this.respuesta.id;
    if (Object.entries(this.respuestas).length > 0) {
      for (const obj of this.respuestas) {
        const filtro = obj.id;
        if (parametro === filtro) {
          banderita = true;
          obj.respuesta = dato;
        }
      }
      if (banderita === false) {
        this.respuestas.push(this.respuesta);
      }
    } else {
      this.respuestas.push(this.respuesta);
    }
  }

  comprobarrespuesta() {
    for (const item of this.cuestionarios) {
      const respuestacorrecta = item.RespuestaCorrecta;
      const idcuestionario = item.id;
      for (const obj of this.respuestas) {
        const idrespuestas = obj.id;
        const respuestaelegida = obj.respuesta;
        if (idcuestionario === idrespuestas) {
          this.resolucion.Pregunta = item.Pregunta;
          this.resolucion.ProgresoId = this.codigoprogreso;
          this.resolucion.Correcto = 'incorrecto';
          this.resolucion.NumeroIntento = (+this.progreso.NumeroIntento + 1).toString();
          this.resolucion.RespuestaEscogida = respuestaelegida;
          if (respuestacorrecta === respuestaelegida) {
            this.numeroaciertos++;
            this.resolucion.Correcto = 'correcto';
            this.resoluciones.push(this.resolucion);
          } else {
            this.resoluciones.push(this.resolucion);
          }
        }
      }
    }
    console.log(this.numeroaciertos);
    this.progreso.Progreso = '100';
    this.progreso.NotaCuestionario = (this.numeroaciertos * this.notaporpregunta).toString();
    this.progreso.NumeroIntento = (+this.progreso.NumeroIntento + 1).toString();
    this.progresoService.updateProgreso(this.codigoprogreso, this.progreso).subscribe(
      resupdate => {
        this.mensaje = resupdate;
        this.saveresoluciones();
        this.router.navigate(
          [
            'student',
            'stu-content'
          ]
        );
      }, err => {
        console.log('Error update cuestionario');
      }
    );
  }
  saveresoluciones() {
    for (const resp of this.resoluciones) {
      this.resolucionService.saveResolucion(resp).subscribe(
        ressaveresolucion => {
          this.resolucion1 = ressaveresolucion;
          console.log(this.resolucion1);
        }, err => {
          console.log('Error saving resolucion');
        }
      );
    }
  }

}
