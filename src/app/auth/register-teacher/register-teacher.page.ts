/* eslint-disable @typescript-eslint/naming-convention */
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Profesor } from 'src/app/models/profesor';
import { GradoService } from 'src/app/services/grado.service';
import { ProfesorService } from 'src/app/services/profesor.service';

@Component({
  selector: 'app-register-teacher',
  templateUrl: './register-teacher.page.html',
  styleUrls: ['./register-teacher.page.scss'],
})
export class RegisterTeacherPage implements OnInit {
  grados: any = [];
  profesor: Profesor = {
    id: 0,
    Nombre:'' ,
    Apellido: '',
    Genero:'',
    Documento: '',
    Seccion: '',
    GradoId: 0
  };
  profesor1: Profesor = {
    id: 0,
    Nombre:'' ,
    Apellido: '',
    Genero:'',
    Documento: '',
    Seccion: '',
    GradoId: 0
  };
  secciones = [
    { name: 'A'},
    { name: 'B'},
    { name: 'C'},
    { name: 'D'},
    { name: 'E'}
  ];
  generos= [
    {
      name: 'Femenino'
    },
    {
      name: 'Masculino'
    },
  ];
  constructor(
    private router: Router,
    private gradoService: GradoService,
    private profesorService: ProfesorService,
  ) { }
  logearse()
    {
      this.router.navigate(
        [
          'auth',
          'login'
        ]
      );
    }
  getgrados() {
    this.gradoService.getGrados().subscribe(
      resgrados => {
        this.grados = resgrados;
      }, err=> {
        console.log('Error get all grados');
      }
    );
  }
  saveProfesor() {
    delete this.profesor.id;
    this.profesorService.saveProfesor(this.profesor).subscribe(
      resdocente => {
        this.profesor1 = resdocente;
        console.log(resdocente);
      }, err=> {
        console.log('Error save Docente');
      }
    );
  }
  onOptionsSelectGenero(event: any){
    const value = event.target.value;
    this.profesor.Genero = value;
  }
  onOptionsSelectGrado(event: any){
    const value = event.target.value;
    this.profesor.GradoId = value;
  }
  onOptionsSelectSeccion(event: any){
    const value = event.target.value;
    this.profesor.Seccion = value;
  }
  ngOnInit() {
    this.getgrados();
  }

}
