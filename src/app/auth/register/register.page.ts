/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Estudiante } from 'src/app/models/estudiante';
import { EstudianteService } from 'src/app/services/estudiante.service';
import { GradoService } from 'src/app/services/grado.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  grados: any =[];
  generos= [
    {
      name: 'Femenino'
    },
    {
      name: 'Masculino'
    },
  ];

  estudiante: Estudiante = {
    id: 0,
    Nombre:'' ,
    Apellido: '',
    Genero:'' ,
    Documento: '' ,
    GradoId: 0
  };

  estudiante1: Estudiante = {
    id: 0,
    Nombre:'' ,
    Apellido: '',
    Genero:'' ,
    Documento: '' ,
    GradoId: 0
  };



  constructor(

    private router: Router,
    private gradoService: GradoService,
    private estudianteService: EstudianteService) { }
    saveEstudiante(){
      delete this.estudiante.id;
      this.estudianteService.saveEstudiante(this.estudiante).subscribe(
        resestudiante => {
          this.estudiante1 =resestudiante;
          this.router.navigate(
            [
              'student'
            ]
          );
          console.log(resestudiante);
        }, err=> {
          console.log('Error save Estudiante');
        }
      );

    }
    getgrados(){
      this.gradoService.getGrados().subscribe(
        resgrados => {
          this.grados = resgrados;
        }, err=> {
          console.log('Error get all grados');
        }
      );
    }

    onOptionsSelectGenero(event: any){
      const value = event.target.value;
      this.estudiante.Genero = value;
    }

    onOptionsSelectGrado(event: any){
      const value = event.target.value;
      this.estudiante.GradoId = value;
    }

  ngOnInit() {
    this.getgrados();
  }

}
