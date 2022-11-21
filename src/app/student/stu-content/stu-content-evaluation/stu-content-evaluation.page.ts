/* eslint-disable @typescript-eslint/naming-convention */
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Progreso } from 'src/app/models/progreso';
import { DataService } from 'src/app/services/data.service';
import { ProgresoService } from 'src/app/services/progreso.service';
import { CuestionarioService } from 'src/app/services/cuestionario.service';

@Component({
  selector: 'app-stu-content-evaluation',
  templateUrl: './stu-content-evaluation.page.html',
  styleUrls: ['./stu-content-evaluation.page.scss'],
})
export class StuContentEvaluationPage implements OnInit {
  cuestionarios: any = [];
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
  respuesta = {
    id: 0,
    respuesta: ''
  };
  respuestas: any = [];
  nota;
  notaporpregunta;
  numeropreguntas;
  numeroaciertos = 0;
  constructor(
    private router: Router,
    private datoService: DataService,
    private progresoService: ProgresoService,
    private cuestionarioService: CuestionarioService,
  ) { }

  ngOnInit() {
    const parametro = JSON.parse(localStorage.getItem('ellibro'));
    const parestudiante = JSON.parse(localStorage.getItem('usuario'));
    this.progresoService.getProgresoidividual(parametro, parestudiante).subscribe(
      resprogreso => {
        this.progreso = resprogreso;
        const parametrito = this.progreso.LibroId;
        this.cuestionarioService.getsearchCuestionariobylibro(parametrito).subscribe(
          rescuestionarios => {
            this.cuestionarios = rescuestionarios;
            this.numeropreguntas = this.cuestionarios.length;
            this.notaporpregunta = 20 / this.numeropreguntas;
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
    this.respuesta.id = codigo;
    this.respuesta.respuesta = dato;
    // filtro para agregar en el array
    // otro para comprobar si se eligio otra respuesta e un respuesta ya registrada
    this.respuestas.push(this.respuesta);
  }

  comprobarrespuesta() {
    for (const item of this.cuestionarios) {
      const respuestacorrecta = item.RespuestaCorrecta;
      for (const obj of this.respuestas) {
        const respuestaelegida = obj.respuesta;
        if (respuestacorrecta === respuestaelegida) {
          this.numeroaciertos++;
        }
      }
    }
    console.log(this.numeroaciertos);
    this.progreso.Progreso = '100';
    this.progreso.NotaCuestionario = (this.numeroaciertos * this.notaporpregunta).toString();
    this.progreso.NumeroIntento = (+this.progreso.NumeroIntento + 1).toString();
  }

}
