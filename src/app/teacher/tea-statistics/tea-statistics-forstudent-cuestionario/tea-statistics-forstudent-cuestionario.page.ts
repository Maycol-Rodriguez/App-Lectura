/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';
import { Progreso } from 'src/app/models/progreso';
import { ActivatedRoute, Router } from '@angular/router';
import { ProgresoService } from 'src/app/services/progreso.service';
import { ResolucionService } from 'src/app/services/resolucion.service';

@Component({
  selector: 'app-tea-statistics-forstudent-cuestionario',
  templateUrl: './tea-statistics-forstudent-cuestionario.page.html',
  styleUrls: ['./tea-statistics-forstudent-cuestionario.page.scss'],
})
export class TeaStatisticsForstudentCuestionarioPage implements OnInit {
  resoluciones: any = [];
  resolucionfiltradas: any = [];
  progreso: Progreso = {
    id: 0,
    Progreso: 0,
    Reaccion: '',
    Comentario: '',
    FinalAlternativo: '',
    FechaLectura: new Date(),
    NotaCuestionario: 0,
    NumeroIntento: 0,
    LibroId: 0,
    EstudianteId: 0
  };
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private progresoService: ProgresoService,
    private resolucionService: ResolucionService,
  ) { }
  onOptionsSelectIntento(event: any){
    const value = event.target.value;
    this.eleccion(value);
  }
  eleccion(dato) {
    this.resolucionService.getResolucioncuestionarioeintento(this.progreso.id, dato).subscribe(
      resresolucion => {
        this.resolucionfiltradas = resresolucion;
      }, err => {
        console.log('Error get resoluciones by progreso');
      }
    );
  }
  ngOnInit() {
    const codigoprogreso = this.activatedRoute.snapshot.paramMap.get('codigo');
    this.progresoService.getProgreso(codigoprogreso).subscribe(
      resprogreso => {
        this.progreso = resprogreso;
        this.resolucionService.getResolucioncuestionarioeintento(this.progreso.id, this.progreso.NumeroIntento).subscribe(
          resresolucion => {
            this.resolucionfiltradas = resresolucion;
            console.log(this.resolucionfiltradas);
          }, err => {
            console.log('Error get resoluciones by progreso');
          }
        );
      }, err => {
        console.log('Error get progreso by id');
      }
    );
  }
  finalizar() {
    this.router.navigate(
      [
        'teacher',
        'tea-home'
      ]
    );
  }
}
