/* eslint-disable @typescript-eslint/naming-convention */
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Estudiante } from 'src/app/models/estudiante';
import { GradoService } from 'src/app/services/grado.service';
import { EstudianteService } from 'src/app/services/estudiante.service';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-stu-profile-edit',
  templateUrl: './stu-profile-edit.page.html',
  styleUrls: ['./stu-profile-edit.page.scss'],
})
export class StuProfileEditPage implements OnInit {
  grados: any = [];
  estudiante: Estudiante = {
    id: 0,
    Nombre:'',
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
  generos = [
    {
      name: 'Femenino'
    },
    {
      name: 'Masculino'
    },
  ];
  cliente;
  codigoestudiante;
  mensaje;
  constructor(
    private router: Router,
    private gradoService: GradoService,
    private estudianteService: EstudianteService,
    private authenticationService: AuthenticationService,
  ) { }
  getgrados() {
    this.gradoService.getGrados().subscribe(
      resgrados => {
        this.grados = resgrados;
      }, err=> {
        console.log('Error get all grados');
      }
    );
  }
  onOptionsSelectGenero(event: any) {
    const value = event.target.value;
    this.estudiante.Genero = value;
  }
  onOptionsSelectGrado(event: any){
    const value = event.target.value;
    this.estudiante.GradoId = value;
  }
  onOptionsSelectSeccion(event: any){
    const value = event.target.value;
    this.estudiante.Seccion = value;
  }
  ngOnInit() {
    this.getgrados();
    this.cliente = JSON.parse(localStorage.getItem('usuario'));
    this.estudiante = this.cliente;
    this.codigoestudiante = this.cliente.id;
  }
  updateEstudiante() {
    this.authenticationService.loggin(this.estudiante, 'estudiante');
    this.estudianteService.updateEstudiante(this.codigoestudiante, this.estudiante).subscribe(
      resupdate => {
        this.mensaje = resupdate;
        this.logout();
      }, err => {
        console.log('Error update estudiante');
      }
    );
  }
  logout() {
    this.authenticationService.loggout();
    this.router.navigate(
      [
        'auth',
        'login'
      ]
    );
  }

}
