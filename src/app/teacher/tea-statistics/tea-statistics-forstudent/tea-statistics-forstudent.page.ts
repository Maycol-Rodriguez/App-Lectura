/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EstudianteDetail } from 'src/app/models/estudiante';
import { ReporteService } from 'src/app/services/reporte.service';
import { EstudianteService } from 'src/app/services/estudiante.service';


@Component({
  selector: 'app-tea-statistics-forstudent',
  templateUrl: './tea-statistics-forstudent.page.html',
  styleUrls: ['./tea-statistics-forstudent.page.scss'],
})
export class TeaStatisticsForstudentPage implements OnInit {
  estudiante: EstudianteDetail = {
    id: 0,
    Nombre: '',
    Apellido: '',
    Genero: '',
    Documento: '',
    Seccion: '',
    GradoId: 0,
    grado: {
      id: 0,
      Nombre: ''
    }
  };
  reporte: any = [];
  reportedetallado: any = [];
  libros: any = [];
  librosleidos;
  audiosescuchados;
  videosvistos;
  notapromedio;
  progresopromedio;
  eleccion = 'libro';
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private reporteService: ReporteService,
    private estudianteService: EstudianteService
  ) { }
  elegir(par) {
    this.eleccion = par;
    if (this.eleccion === 'lectura') {
      this.libros = this.reportedetallado[2];
    } else if (this.eleccion === 'video') {
      this.libros = this.reportedetallado[0];
    } else if (this.eleccion === 'audio') {
      this.libros = this.reportedetallado[1];
    }
    console.log(this.libros);
  }
  ngOnInit() {
    const inicio = this.activatedRoute.snapshot.paramMap.get('inicio');
    const fin = this.activatedRoute.snapshot.paramMap.get('fin');
    const codigoestudiante = this.activatedRoute.snapshot.paramMap.get('estudiante');
    this.estudianteService.getEstudiante(codigoestudiante).subscribe(
      resestudiante => {
        this.estudiante = resestudiante;
        this.reporteService.getstatisticsindividual(this.estudiante.id, inicio, fin).subscribe(
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
        this.reporteService.getstatisticsindividualdetail(this.estudiante.id, inicio, fin).subscribe(
          resrepodetallado => {
            this.reportedetallado = resrepodetallado;
            console.log(this.reportedetallado);
          }, err => {
            console.log('Error get reporte detallado');
          }
        );
      }, err => {
        console.log('Error get estudiante');
      }
    );
  }
  goToCuento(parametro) {
    this.router.navigate(
      [
        'teacher',
        'tea-statistics',
        'tea-statistics-forstudent-libro',
        parametro,
        this.estudiante.id
      ]
    );
  }
}
