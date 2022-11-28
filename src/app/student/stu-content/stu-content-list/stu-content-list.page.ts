import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { GradoService } from 'src/app/services/grado.service';
import { PublicacionService } from 'src/app/services/publicacion.service';

@Component({
  selector: 'app-stu-content-list',
  templateUrl: './stu-content-list.page.html',
  styleUrls: ['./stu-content-list.page.scss'],
})
export class StuContentListPage implements OnInit {
  libros: any = [];
  grados: any = [];
  constructor(
    private router: Router,
    private toast: ToastController,
    private gradoService: GradoService,
    private cuentoService: PublicacionService
  ) { }
  home() {
    this.router.navigate(
      [
        'student',
        'stu-home'
      ]
    );
  }
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
  getgrados() {
    this.gradoService.getGrados().subscribe(
      res => {
        this.grados = res;
        console.log(this.grados);
      }, err => {
        console.log('error get all grados');
      }
    );
  }
  getlibros() {
    const parametro = 'interna';
    this.cuentoService.getsearchPublicacionbyprocedencia(parametro).subscribe(
      res => {
        this.libros = res;
        console.log(this.libros);
      }, err => {
        console.log('Error get publicaciones internas');
      }
    );
  }
  getlibrobygrade(parametro: any) {
    this.cuentoService.getsearchPublicacionbygrado(parametro).subscribe(
      res => {
        this.libros = res;
        console.log(this.libros);
      }, err => {
        console.log('Error get publicaciones internas y grado');
      }
    );
  }
  ngOnInit() {
    this.getgrados();
    this.getlibros();
  }
  seleccion(dato: any) {
    // this.datoService.rentedbook(dato);
    this.router.navigate(
      [
        'student',
        'stu-content',
        'stu-content-select'
      ]
    );
  }

}
