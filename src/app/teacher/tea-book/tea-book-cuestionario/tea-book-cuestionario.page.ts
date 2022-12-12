/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cuestionario } from 'src/app/models/cuestionario';
import { LibroService } from 'src/app/services/libro.service';
import { CuestionarioService } from 'src/app/services/cuestionario.service';

@Component({
  selector: 'app-tea-book-cuestionario',
  templateUrl: './tea-book-cuestionario.page.html',
  styleUrls: ['./tea-book-cuestionario.page.scss'],
})
export class TeaBookCuestionarioPage implements OnInit {
  cuesionarios: any = [];
  cuestionario: Cuestionario = {
    Pregunta: '',
    RespuestaCorrecta: '',
    RespuestaIncorrecta1: '',
    RespuestaIncorrecta2: '',
    LibroId: 0
  };
  cuestionario1: Cuestionario = {
    id: 0,
    Pregunta: '',
    RespuestaCorrecta: '',
    RespuestaIncorrecta1: '',
    RespuestaIncorrecta2: '',
    LibroId: 0
  };
  codigolibro;
  constructor(
    private router: Router,
    private libroService: LibroService,
    private activatedRoute: ActivatedRoute,
    private cuestionarioService: CuestionarioService,
  ) { }

  saveCuestionario() {
    this.cuestionarioService.saveCuestionario(this.cuestionario).subscribe(
      rescuestionario => {
        this.cuestionario1 = rescuestionario;
        this.cuestionarioService.getsearchCuestionariobylibro(this.codigolibro).subscribe(
          res => {
            this.cuesionarios = res;
            this.cuestionario.Pregunta = '';
            this.cuestionario.RespuestaCorrecta = '';
            this.cuestionario.RespuestaIncorrecta1 = '';
            this.cuestionario.RespuestaIncorrecta2 = '';
          }, err => {
            console.log('Error get cuestionario by book');
          }
        );
      }, err => {
        console.log('Error save cuestionario');
      }
    );
  }
  ngOnInit() {
    const parametro = this.activatedRoute.snapshot.paramMap.get('libro');
    this.codigolibro = parametro;
    this.cuestionario.LibroId = this.codigolibro;
  }
  terminar() {

  }
}
