
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { Responsable } from 'src/app/models/responsable';
import { DataService } from 'src/app/services/data.service';
import { ResponsableService } from 'src/app/services/responsable.service';

@Component({
  selector: 'app-stu-content-accompanying',
  templateUrl: './stu-content-accompanying.page.html',
  styleUrls: ['./stu-content-accompanying.page.scss'],
})
export class StuContentAccompanyingPage implements OnInit {
  /* eslint-disable @typescript-eslint/naming-convention */
  dato = '';
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
  genero = [
    {
      id: 1,
      name: 'Masculino'
    },
    {
      id: 2,
      name: 'Femenino'
    }
  ];
  verformulario = false;
  botones = true;
  constructor(
    private router: Router,
    private toast: ToastController,
    private datoService: DataService,
    private responsableService: ResponsableService,
  ) { }
  async toasteleccion() {
    const toast = await this.toast.create(
      {
        message: 'Cuento o libro seleccionado',
        duration: 1000,
        animated: true,
        color: 'success',
        position: 'top'
      }
    );
    toast.present();
  }
  handleChange(ev) {
    this.responsable.Genero = ev.target.value;
  }
  ngOnInit() {
  }
  atras() {
    this.router.navigate(
      [
        'student',
        'stu-content',
        'stu-content-list'
      ]
    );
  }
  solitario() {
    this.datoService.saveaconpaniante(1);
    this.router.navigate(
      [
        'student',
        'stu-content',
        'stu-content-select'
      ]
    );
  }
  acompaniado() {
    this.verformulario = true;
    this.botones = false;
  }
  buscar(dato) {
    this.responsableService.getsearchResponsablebydoc(dato).subscribe(
      res => {
        this.responsable1 = res;
        console.log(res);
        this.datoService.saveaconpaniante(this.responsable1.id);
        this.iraseleccionar();
      }, err => {
        console.log('Error get search doc responsable');
      }
    );
  }
  siguiente() {
    delete this.responsable.id;
    console.log(this.responsable);
    // this.responsableService.saveResponsable(this.responsable).subscribe(
    //   res => {
    //     this.responsable1 = res;
    //     console.log(res);
    //     this.datoService.saveaconpaniante(this.responsable1.id);
    //     this.iraseleccionar();
    //   }, err => {
    //     console.log('Error save responsable');
    //   }
    // );
  }
  iraseleccionar() {
    this.router.navigate(
      [
        'student',
        'stu-content',
        'stu-content-select'
      ]
    );
  }

}
