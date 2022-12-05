/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Profesor } from 'src/app/models/profesor';
import { EstudianteService } from 'src/app/services/estudiante.service';
import { GradoService } from 'src/app/services/grado.service';
import { ProfesorService } from 'src/app/services/profesor.service';

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
  constructor(
    private router: Router,
    private gradoService: GradoService,
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
