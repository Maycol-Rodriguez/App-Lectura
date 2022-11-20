/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EstudianteDetail } from 'src/app/models/estudiante';
import { Responsable } from 'src/app/models/responsable';
import { EstudianteService } from 'src/app/services/estudiante.service';
import { ProfesorService } from 'src/app/services/profesor.service';
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
    Documento: '' ,
    GradoId: 0,
    grado:{
      id:0,
      Nombre: ''
    }
  };

  constructor(
    private router: Router,
    private estudianteService: EstudianteService,
    private profesorService: ProfesorService,
    responsableService: ResponsableService,
  ) { }

  loginestudiante(){
    this.estudianteService.getsearchEstudiantebydoc(this.parametro).subscribe(
      reslogin => {
        if(reslogin !== null ){
          this.estudiante= reslogin;
          this.router.navigate(
            [
              'student'
            ]
          );

        }else {
          console.log('Documento no encontrado, Por favor registrece');
        }
      },err => {
        console.log('Error login estudiante');
      }
    );
  }



  ngOnInit() {
  }

}
