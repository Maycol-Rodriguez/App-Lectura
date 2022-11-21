/* eslint-disable @typescript-eslint/naming-convention */
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { Relacion } from 'src/app/models/relacion';
import { Estudiante } from 'src/app/models/estudiante';
import { Responsable } from 'src/app/models/responsable';
import { GradoService } from 'src/app/services/grado.service';
import { RelacionService } from 'src/app/services/relacion.service';
import { EstudianteService } from 'src/app/services/estudiante.service';
import { ResponsableService } from 'src/app/services/responsable.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  grados: any =[];
  relaciones: any =[];
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
  responsable: Responsable = {
    id: 0,
    Nombre: '',
    Apellido: '',
    Genero: '',
    Documento: ''
  };
  responsable1: Responsable = {
    id: 0,
    Nombre: '',
    Apellido: '',
    Genero: '',
    Documento: ''
  };
  relacion: Relacion = {
    Parentesco: '',
    ResponsableId: 0,
    EstudianteId: 0
  };
  relacion1: Relacion = {
    id: 0,
    Parentesco: '',
    ResponsableId: 0,
    EstudianteId: 0
  };
  constructor(
    private router: Router,
    private toast: ToastController,
    private gradoService: GradoService,
    private relacionService: RelacionService,
    private estudianteService: EstudianteService,
    private responsableService: ResponsableService,
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

    saveEstudiante() {
      delete this.estudiante.id;
      this.estudianteService.saveEstudiante(this.estudiante).subscribe(
        resestudiante => {
          this.estudiante1 =resestudiante;
          console.log(resestudiante);
        }, err=> {
          console.log('Error save Estudiante');
        }
      );
    }
    saveResponsable() {
      delete this.estudiante.id;
      this.responsableService.saveResponsable(this.responsable).subscribe(
        resresponsable => {
          this.responsable1 =resresponsable;
          console.log(resresponsable);
        }, err=> {
          console.log('Error save responsable');
        }
      );
    }
    saveRelacion() {
      this.relacionService.saveRelacion(this.relacion).subscribe(
        resrelacion => {
          this.responsable1 =resrelacion;
          console.log(resrelacion);
        }, err=> {
          console.log('Error save Relacion');
        }
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
