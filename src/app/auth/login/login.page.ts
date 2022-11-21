/* eslint-disable @typescript-eslint/naming-convention */
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { ProfesorDetail } from 'src/app/models/profesor';
import { Responsable } from 'src/app/models/responsable';
import { EstudianteDetail } from 'src/app/models/estudiante';
import { ProfesorService } from 'src/app/services/profesor.service';
import { EstudianteService } from 'src/app/services/estudiante.service';
import { ResponsableService } from 'src/app/services/responsable.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  parametro;
  estudiante: EstudianteDetail = {
    id: 0,
    Nombre:'' ,
    Apellido: '',
    Genero:'' ,
    Documento: '',
    GradoId: 0,
    grado:{
      id:0,
      Nombre: ''
    }
  };
  responsable: Responsable = {
    id: 0,
    Nombre:'' ,
    Apellido: '',
    Genero:'' ,
    Documento: ''
  };
  profesor: ProfesorDetail = {
    id: 0,
    Nombre:'' ,
    Apellido: '',
    Genero:'' ,
    Documento: '',
    GradoId: 0,
    grado:{
      id:0,
      Nombre: ''
    }
  };
  eleccion;
  constructor(
    private router: Router,
    private toast: ToastController,
    private profesorService: ProfesorService,
    private estudianteService: EstudianteService,
    private responsableService: ResponsableService,
  ) { }
  async toastloginsucceed() {
    const toast = await this.toast.create(
      {
        message: 'Bienvenido',
        duration: 1000,
        animated: true,
        color: 'success',
        position: 'top'
      }
    );
    toast.present();
  }
  async toastloginerror() {
    const toast = await this.toast.create(
      {
        message: 'Por favor Crear sus credenciales',
        duration: 1000,
        animated: true,
        color: 'warning',
        position: 'top'
      }
    );
    toast.present();
  }
  registrarse()
  {
    this.router.navigate(
      [
        'auth',
        'register'
      ]
    );
  }
  loginestudiante() {
    this.estudianteService.getsearchEstudiantebydoc(this.parametro).subscribe(
      reslogin => {
        if(reslogin !== null ){
          this.estudiante = reslogin;
          this.toastloginsucceed();
          this.router.navigate(
            [
              'student'
            ]
          );
        }else {
          this.toastloginerror();
          console.log('Documento no encontrado, Por favor registrece como estudiante');
        }
      },err => {
        console.log('Error login estudiante');
      }
    );
  }
  loginresponsable() {
    this.responsableService.getsearchResponsablebydoc(this.parametro).subscribe(
      reslogin => {
        if(reslogin !== null ){
          this.responsable = reslogin;
          this.toastloginsucceed();
          this.router.navigate(
            [
              'family'
            ]
          );
        }else {
          this.toastloginerror();
          console.log('Documento no encontrado, Por favor registrece como responsable');
        }
      },err => {
        console.log('Error login responsable');
      }
    );
  }
  loginprofesor() {
    this.profesorService.getsearchProfesorbydoc(this.parametro).subscribe(
      reslogin => {
        if(reslogin !== null ){
          this.profesor = reslogin;
          this.toastloginsucceed();
          this.router.navigate(
            [
              'teacher'
            ]
          );
        }else {
          this.toastloginerror();
          console.log('Documento no encontrado, Por favor registrece dentro de la aplicacion de su hijo');
        }
      },err => {
        console.log('Error login profesor');
      }
    );
  }


  ngOnInit() {
  }

}
