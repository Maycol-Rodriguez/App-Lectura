/* eslint-disable @typescript-eslint/naming-convention */
import { Libro } from 'src/app/models/libro';
import { Parrafo } from 'src/app/models/parrafo';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Publicacion } from 'src/app/models/publicacion';
import { TipoService } from 'src/app/services/tipo.service';
import { LibroService } from 'src/app/services/libro.service';
import { ParrafoService } from './../../../services/parrafo.service';
import { PublicacionService } from 'src/app/services/publicacion.service';

@Component({
  selector: 'app-stu-book-update',
  templateUrl: './stu-book-update.page.html',
  styleUrls: ['./stu-book-update.page.scss'],
})
export class StuBookUpdatePage implements OnInit {
  parrafos: any = [];
  tipos: any = [];
  libro: Libro = {
    id: 0,
    Titulo: '',
    Audio: '',
    Video: '',
    Imagen: '',
    Autor: ''
  };
  parrafo: Parrafo = {
    id: 0,
    Parrafo: '',
    Imagen: '',
    Tipoid: 0,
    LibroId: 0
  };
  publicacion: Publicacion = {
    id: 0,
    Procedencia: '',
    FechaRegistro: new Date(),
    GradoDestino: 0,
    LibroId: 0,
    EstudianteId: 0
  };
  mensajelibro;
  mensajeparrafo;
  mensajepublicacion;
  codigolibro;
  codigoparafo;
  cliente;
  isModalOpen = false;
  constructor(
    private router: Router,
    private tipoService: TipoService,
    private libroService: LibroService,
    private parrafoService: ParrafoService,
    private activatedRoute: ActivatedRoute,
    private publicacionService: PublicacionService,
  ) { }
  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }
  onOptionsSelectTipo(event: any){
    const value = event.target.value;
    this.parrafo.Tipoid = value;
  }
  gettipos() {
    this.tipoService.getTipos().subscribe(
      restipos => {
        this.tipos = restipos;
      }, err => {
        console.log('Error get tipos');
      }
    );
  }
  getparrafos() {
    this.parrafoService.getsearchParrafobylibro(this.codigolibro).subscribe(
      resparrafos => {
        this.parrafos = resparrafos;
      }, err => {
        console.log('Error get parrafos by libro');
      }
    );
  }
  selectParrafo(dato) {
    this.setOpen(true);
    this.parrafoService.getParrafo(dato).subscribe(
      resparrafito => {
        this.parrafo = resparrafito;
      }, err => {
        console.log('Eror get parrafo');
      }
    );
  }
  updateLibro() {
    this.libroService.updateLibro(this.codigolibro, this.libro).subscribe(
      reslibro => {
        this.mensajelibro = reslibro;
        this.publicacion.FechaRegistro = new Date();
        this.publicacionService.updatePublicacion(this.publicacion.id, this.publicacion).subscribe(
          respublicacion => {
            this.mensajepublicacion = respublicacion;
          }, err => {
            console.log('Error update Publicacion');
          }
        );
      }, err => {
        console.log('Eror update libro');
      }
    );
  }
  updateParrafo(dato) {
    this.setOpen(false);
    this.parrafoService.updateParrafo(dato, this.parrafo).subscribe(
      resparrafo => {
        this.mensajeparrafo = resparrafo;
      }, err => {
        console.log('Error update parrafo');
      }
    );
  }
  finalizar() {
    this.router.navigate(
      [
        'student',
        'stu-book',
        'stu-book-list'
      ]
    );
  }
  ngOnInit() {
    const parametro = this.activatedRoute.snapshot.paramMap.get('libro');
    this.codigolibro = parametro;
    this.libroService.getLibro(parametro).subscribe(
      reslibro => {
        if (reslibro !== null) {
          this.libro = reslibro;
          this.getparrafos();
        } else {
          console.log('No hay examen');
        }
      }, err => {
        console.log('Error get libro');
      }
    );
  }
}
