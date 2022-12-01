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
  formatoconglomerado = {
    id: 0,
    Pregunta: '',
    Respuesa1: '',
    Respuesa2: '',
    Respuesa3: ''
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
    this.progresoService.getProgresoidividual(parametro, parestudiante).subscribe(
      resprogreso => {
        this.progreso = resprogreso;
        this.codigoprogreso = this.progreso.id;
        const parametrito = this.progreso.LibroId;
        this.cuestionarioService.getsearchCuestionariobylibro(parametrito).subscribe(
          rescuestionarios => {
            this.cuestionarios = rescuestionarios;
            this.numeropreguntas = this.cuestionarios.length;
            this.notaporpregunta = 20 / this.numeropreguntas;
            for (const item of this.cuestionarios) {
              // separamos la pregunta de sus respuestas
              this.formatopregunta.id = item.id;
              this.formatopregunta.Pregunta = item.Pregunta;
              this.preguntas.push(this.formatopregunta);
              // desordenamos las respuestas
              const cajasimple = [];
              const arrayrespuestas = [];
              arrayrespuestas.push(item.RespuestaCorrecta);
              arrayrespuestas.push(item.RespuestaIncorrecta1);
              arrayrespuestas.push(item.RespuestaIncorrecta2);
              arrayrespuestas.sort();
              cajasimple.push(arrayrespuestas);
              this.respuestasdesordenadas = cajasimple;
            }
            console.log(this.preguntas);
            console.log(this.respuestasdesordenadas);
            // guardamos todo orientado a objetos para no complicarnos
            for (let i = 0; i < this.numeropreguntas; i++) {
              console.log(this.preguntas[i]);
              console.log(this.respuestasdesordenadas[i]);
              this.formatoconglomerado.id = this.preguntas[i].id;
              this.formatoconglomerado.Pregunta = this.preguntas[i].Pregunta;
              this.formatoconglomerado.Respuesa1 = this.respuestasdesordenadas[i][1];
              this.formatoconglomerado.Respuesa2 = this.respuestasdesordenadas[i][2];
              this.formatoconglomerado.Respuesa3 = this.respuestasdesordenadas[i][3];
              this.cuestionariofiltrado.push(this.formatoconglomerado);
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
