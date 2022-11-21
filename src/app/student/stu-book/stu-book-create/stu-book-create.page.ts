/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';
import { Libro } from 'src/app/models/libro';
import { Parrafo } from 'src/app/models/parrafo';
import { LibroService } from 'src/app/services/libro.service';

@Component({
  selector: 'app-stu-book-create',
  templateUrl: './stu-book-create.page.html',
  styleUrls: ['./stu-book-create.page.scss'],
})
export class StuBookCreatePage implements OnInit {
  parrafos: any = [];
  libro: Libro = {
    Titulo: '',
    Audio: '',
    Video: '',
    Imagen: '',
    Autor: ''
  };
  libro1: Libro = {
    id: 0,
    Titulo: '',
    Audio: '',
    Video: '',
    Imagen: '',
    Autor: ''
  };
  parrafo: Parrafo = {
    Parrafo: '',
    Imagen: '',
    Tipoid: 0,
    LibroId: 0
  };
  parrafo1: Parrafo = {
    id: 0,
    Parrafo: '',
    Imagen: '',
    Tipoid: 0,
    LibroId: 0
  };
  constructor(
    private libroService: LibroService,
  ) { }
  saveLibro() {
    delete this.libro.id;
    this.libroService.saveLibro(this.libro).subscribe(
      reslibro => {
        this.libro1 = reslibro;
        console.log(reslibro);
      }, err => {
        console.log('Error save Libro');
      }
    );
  }
  ngOnInit() {
  }

}
