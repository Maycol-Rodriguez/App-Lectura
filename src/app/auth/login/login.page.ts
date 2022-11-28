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
import { AuthenticationService } from 'src/app/services/authentication.service';

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
    GradoId: 0
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
    GradoId: 0
  };
  tipos = [
    {
      name: 'estudiante'
    },
    {
      name: 'profesor'
    },
    {
      name: 'responsable'
    }
  ];
  eleccion = 'estudiante';
  constructor(
    private router: Router,
    private toast: ToastController,
    private profesorService: ProfesorService,
    private estudianteService: EstudianteService,
    private responsableService: ResponsableService,
    private authenticationService: AuthenticationService,
  ) { }
  onOptionsSelectTipo(event: any){
    const value = event.target.value;
    this.eleccion = value;
  }
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
  login() {
    console.log(this.parametro);
    // this.authenticationService.loggout();
    if (this.eleccion === 'estudiante') {
      this.loginestudiante();
    } else if (this.eleccion === 'profesor') {
      this.loginprofesor();
    } else if (this.eleccion === 'responsable') {
      this.loginresponsable();
    }
  }
  loginestudiante() {
    this.estudianteService.getsearchEstudiantebydoc(this.parametro).subscribe(
      reslogin => {
        if(reslogin !== null){
          this.estudiante = reslogin;
          console.log(this.estudiante);
          console.log(this.eleccion);
          this.authenticationService.loggin(this.estudiante, this.eleccion);
          this.toastloginsucceed();
          // this.router.navigate(
          //   [
          //     'student'
          //   ]
          // );
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
          this.authenticationService.loggin(this.responsable, this.eleccion.toLowerCase());
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
          this.authenticationService.loggin(this.profesor, this.eleccion.toLowerCase());
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
