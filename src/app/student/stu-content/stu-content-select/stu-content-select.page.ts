/* eslint-disable @typescript-eslint/naming-convention */
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Libro } from 'src/app/models/libro';
import { LibroService } from 'src/app/services/libro.service';

@Component({
  selector: 'app-stu-content-select',
  templateUrl: './stu-content-select.page.html',
  styleUrls: ['./stu-content-select.page.scss'],
})
export class StuContentSelectPage implements OnInit {
  libro: Libro = {
    id: 0,
    Titulo: '',
    Audio: '',
    Video: '',
    Imagen: '',
    Autor: ''
  };
  constructor(
    private router: Router,
    private libroService: LibroService,
  ) { }

  ngOnInit() {
    const parametro = JSON.parse(localStorage.getItem('ellibro'));
    this.libroService.getLibro(parametro).subscribe(
      reslibro => {
        this.libro = reslibro;
      }, err => {
        console.log('Error get libro by id');
      }
    );
  }

  porlectura() {
    this.router.navigate(
      [
        'student',
        'stu-content',
        'stu-content-reading'
      ]
    );
  }
  porvideo() {
    this.router.navigate(
      [
        'student',
        'stu-content',
        'stu-content-video'
      ]
    );
  }
  poraudio() {
    this.router.navigate(
      [
        'student',
        'stu-content',
        'stu-content-audio'
      ]
    );
  }

}
