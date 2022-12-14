import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
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
  librosfiltrados: any = [];
  vistaeleccion = true;
  vistalibros = false;
  nohaydisponibles = false;
  ruta = 'lectura';
  constructor(
    private router: Router,
    private toast: ToastController,
    private datoService: DataService,
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
        this.vistaeleccion = true;
        this.vistalibros = false;
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
        this.vistaeleccion = true;
        this.vistalibros = false;
      }, err => {
        console.log('Error get publicaciones internas y grado');
      }
    );
  }
  porlectura() {
    const array: any = [];
    for (const item of this.libros) {
      if (item.libro.Video === '' && item.libro.Audio === '') {
        // console.log('Entrando a aqui');
        array.push(item);
        this.librosfiltrados = array;
      }
    }
    console.log(this.librosfiltrados);
    this.vistalibros = true;
    this.vistaeleccion = false;
    this.ruta = 'lectura';
  }
  porvideo() {
    const array: any = [];
    for (const item of this.libros) {
      if (item.libro.Video !== '') {
        array.push(item);
        this.librosfiltrados = array;
      }
    }
    console.log(this.librosfiltrados);
    this.vistalibros = true;
    this.vistaeleccion = false;
    this.ruta = 'video';
  }
  poraudio() {
    const array: any = [];
    for (const item of this.libros) {
      if (item.libro.Audio !== '') {
        array.push(item);
        this.librosfiltrados = array;
      }
    }
    console.log(this.librosfiltrados);
    this.vistalibros = true;
    this.vistaeleccion = false;
    this.ruta = 'audio';
  }
  ngOnInit() {
    this.getgrados();
    this.getlibros();
  }
  seleccion(dato: any) {
    this.datoService.rentedbook(dato);
    if (this.ruta === 'lectura') {
      this.router.navigate(
        [
          'student',
          'stu-content',
          'stu-content-reading'
        ]
      );
    } else if (this.ruta === 'video') {
      this.router.navigate(
        [
          'student',
          'stu-content',
          'stu-content-video'
        ]
      );
    } else if (this.ruta === 'audio') {
      this.router.navigate(
        [
          'student',
          'stu-content',
          'stu-content-audio'
        ]
      );
    }
  }
}
