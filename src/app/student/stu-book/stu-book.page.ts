/* eslint-disable @typescript-eslint/naming-convention */
import { Libro } from 'src/app/models/libro';
import { Component, OnInit } from '@angular/core';
import { LibroService } from 'src/app/services/libro.service';

@Component({
  selector: 'app-stu-book',
  templateUrl: './stu-book.page.html',
  styleUrls: ['./stu-book.page.scss'],
})
export class StuBookPage implements OnInit {
  libro: Libro = {
    id: 0,
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
