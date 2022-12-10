/* eslint-disable @typescript-eslint/naming-convention */
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { EstudianteDetail } from 'src/app/models/estudiante';
import { ReporteService } from 'src/app/services/reporte.service';

@Component({
  selector: 'app-stu-detail',
  templateUrl: './stu-detail.page.html',
  styleUrls: ['./stu-detail.page.scss'],
})
export class StuDetailPage implements OnInit {
  estudiante: EstudianteDetail = {
    id: 0,
    Nombre:'' ,
    Apellido: '',
    Genero:'' ,
    Documento: '',
    Seccion: '',
    GradoId: 0,
    grado: {
      id: 0,
      Nombre: ''
    }
  };
  cliente;
  reporte: any = [];
  librosleidos;
  audiosescuchados;
  videosvistos;
  notapromedio;
  progresopromedio;
  constructor(
    private router: Router,
    private reporteService: ReporteService,
  ) { }

  ngOnInit() {
    const hoy = new Date();
    const parametro = hoy.toISOString().split('T')[0];
    this.cliente = JSON.parse(localStorage.getItem('usuario'));
    this.estudiante = this.cliente;
    this.reporteService.getstatisticsindividual(this.estudiante.id, '2022-10-11', parametro).subscribe(
      resrepo => {
        this.reporte = resrepo;
        this.videosvistos = this.reporte[0][0].videos_vistos;
        this.audiosescuchados = this.reporte[1][0].audios_escuchados;
        this.librosleidos = this.reporte[2][0].libros_leidos;
        this.notapromedio = this.reporte[2][0].nota;
        this.progresopromedio = this.reporte[2].progreso;
      }, err => {
        console.log('Error get reporte individual');
      }
    );
  }
  goToHome() {
    this.router.navigate(
      [
        'student',
        'stu-content',
        'stu-content-list'
      ]
    );
  }

}
