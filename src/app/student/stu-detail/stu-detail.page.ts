/* eslint-disable @typescript-eslint/naming-convention */
import { Router } from '@angular/router';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core';
import { DataService } from 'src/app/services/data.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { EstudianteDetail } from 'src/app/models/estudiante';
import { ReporteService } from 'src/app/services/reporte.service';

@Component({
  selector: 'app-stu-detail',
  templateUrl: './stu-detail.page.html',
  styleUrls: ['./stu-detail.page.scss'],
})
export class StuDetailPage implements OnInit {
  @ViewChild(IonModal) modal: IonModal;
  estudiante: EstudianteDetail = {
    id: 0,
    Nombre:'' ,
    Apellido: '',
    Genero:'' ,
    Documento: '',
    Seccion: '',
    GradoId: 0,
    grado: {
      id: 0,
      Nombre: ''
    }
  };
  cliente;
  reporte: any = [];
  reportedetallado: any = [];
  libros: any = [];
  librosleidos;
  audiosescuchados;
  videosvistos;
  notapromedio;
  progresopromedio;
  eleccion = 'libro';
  isModalOpen = false;
  constructor(
    private router: Router,
    private datoService: DataService,
    private reporteService: ReporteService,
  ) { }
  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }
  cancel() {
    this.modal.dismiss(null, 'cancel');
  }
  confirm() {
    this.modal.dismiss(null, 'confirm');
  }
  elegir(par) {
    this.setOpen(true);
    this.eleccion = par;
    if (this.eleccion === 'lectura') {
      this.libros = this.reportedetallado[2];
    } else if (this.eleccion === 'video') {
      this.libros = this.reportedetallado[0];
    }else if (this.eleccion === 'audio') {
      this.libros = this.reportedetallado[1];
    }
    console.log(this.libros);
  }
  ngOnInit() {
    const hoy = new Date();
    const parametro = hoy.toISOString().split('T')[0];
    this.cliente = JSON.parse(localStorage.getItem('usuario'));
    this.estudiante = this.cliente;
    this.reporteService.getstatisticsindividual(this.estudiante.id, '2022-10-11', parametro).subscribe(
      resrepo => {
        this.reporte = resrepo;
        this.videosvistos = this.reporte[0][0].videos_vistos;
        this.audiosescuchados = this.reporte[1][0].audios_escuchados;
        this.librosleidos = this.reporte[2][0].libros_leidos;
        this.notapromedio = this.reporte[2][0].nota;
        this.progresopromedio = this.reporte[2].progreso;
        this.librosleidos = 10;
      }, err => {
        console.log('Error get reporte individual');
      }
    );
    this.reporteService.getstatisticsindividualdetail(this.estudiante.id, '2022-10-11', parametro).subscribe(
      resrepodetallado => {
        this.reportedetallado = resrepodetallado;
        console.log(this.reportedetallado);
      }, err => {
        console.log('Error get reporte detallado');
      }
    );
  }
  seleccion(codigo) {
    this.datoService.rentedbook(codigo);
    this.setOpen(false);
    if (this.eleccion === 'lectura') {
      this.gobook();
    } else if (this.eleccion === 'video') {
      this.govideo();
    }else if (this.eleccion === 'audio') {
      this.goaudio();
    }
  }
  gobook() {
    this.router.navigate(
      [
        'student',
        'stu-content',
        'stu-content-reading'
      ]
    );
  }
  govideo() {
    this.router.navigate(
      [
        'student',
        'stu-content',
        'stu-content-video'
      ]
    );
  }
  goaudio() {
    this.router.navigate(
      [
        'student',
        'stu-content',
        'stu-content-audio'
      ]
    );
  }
  goToHome() {
    this.router.navigate(
      [
        'student',
        'stu-content',
        'stu-content-list'
      ]
    );
  }

}
