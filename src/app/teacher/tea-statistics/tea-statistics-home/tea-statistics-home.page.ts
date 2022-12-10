/* eslint-disable @typescript-eslint/naming-convention */
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Profesor } from 'src/app/models/profesor';
import { GradoService } from 'src/app/services/grado.service';
import { ReporteService } from 'src/app/services/reporte.service';
import { ProfesorService } from 'src/app/services/profesor.service';
import { EstudianteService } from 'src/app/services/estudiante.service';

@Component({
  selector: 'app-tea-statistics-home',
  templateUrl: './tea-statistics-home.page.html',
  styleUrls: ['./tea-statistics-home.page.scss'],
})
export class TeaStatisticsHomePage implements OnInit {
  grados: any =  [];
  estudiantes: any = [];
  secciones: any = [
    { name: 'A' },
    { name: 'B' },
    { name: 'C' },
  ];
  profesor: Profesor = {
    id: 0,
    Nombre:'' ,
    Apellido: '',
    Genero:'',
    Documento: '',
    Seccion: '',
    GradoId: 0
  };
  gradoelegido;
  seccionelegida;
  cliente;
  fechainicio: Date = new Date();
  fechafin: Date = new Date();
  parametro = {
    inicio: '',
    fin: ''
  };
  reporte = {
    intentos: 0,
    lecturas: 0,
    nota: 0,
    progreso: 0
  };
  constructor(
    private router: Router,
    private gradoService: GradoService,
    private reporteService: ReporteService,
    private profesorService: ProfesorService,
    private estudianteService: EstudianteService,

  ) { }
  getgrados() {
    this.gradoService.getGrados().subscribe(
      resgrados => {
        this.grados = resgrados;
      }, err => {
        console.log('Error get all grados');
      }
    );
  }
  onOptionsSelectGrado(event: any){
    const value = event.target.value;
    this.gradoelegido = value;
  }
  onOptionsSelectSeccion(event: any){
    const value = event.target.value;
    this.seccionelegida = value;
  }
  ngOnInit() {
    this.getgrados();
    this.cliente = JSON.parse(localStorage.getItem('usuario'));
    this.profesor = this.cliente;
    this.gradoelegido = this.profesor.GradoId;
    this.seccionelegida = this.profesor.Seccion;
    this.getestudiantes(this.gradoelegido, this.seccionelegida);

  }
  botonfiltrador() {
    this.getestudiantes(this.gradoelegido, this.seccionelegida);
  }
  generarestadisticas() {
    const inicio = new Date(this.fechainicio);
    const fin = new Date(this.fechafin);
    this.parametro.inicio = inicio.toISOString().split('T')[0];
    this.parametro.fin = fin.toISOString().split('T')[0];
    console.log(this.fechainicio, this.fechafin);
    console.log(this.parametro);
    // eslint-disable-next-line max-len
    this.reporteService.getstatisticsbygradeandsecccion(this.gradoelegido, this.seccionelegida.toString(), this.parametro.inicio, this.parametro.fin).subscribe(
      resstatics => {
        this.reporte = resstatics[0][0];
        console.log(this.reporte);
      }, err => {
        console.log('Error get estadisticas');
      }
    );
  }
  getestudiantes(a: string | number,b: string){
    this.estudianteService.getsearchEstudiantebygrado(a, b).subscribe(
      resestudiantes => {
        this.estudiantes = resestudiantes;
        console.log(this.estudiantes);
      }, err => {
        console.log('Error get estudiantes by grado and seccion elegida');
      }
      );
  }

  goToStudent() {
    this.router.navigate(
      [
        'teacher',
        'tea-statistics',
        'tea-statistics-forstudent'
      ]
    );
  }
}
