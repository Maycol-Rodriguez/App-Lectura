import { Router } from '@angular/router';
import { IonModal } from '@ionic/angular';
import { Libro } from 'src/app/models/libro';
import { Parrafo } from 'src/app/models/parrafo';
import { OverlayEventDetail } from '@ionic/core/components';
import { TipoService } from 'src/app/services/tipo.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { LibroService } from 'src/app/services/libro.service';
import { ParrafoService } from './../../../services/parrafo.service';
import { PublicacionService } from 'src/app/services/publicacion.service';

@Component({
  selector: 'app-stu-book-update',
  templateUrl: './stu-book-update.page.html',
  styleUrls: ['./stu-book-update.page.scss'],
})
export class StuBookUpdatePage implements OnInit {
  @ViewChild(IonModal) modal: IonModal;
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
  mensajelibro;
  mensajeparrafo;
  codigolibro;
  codigoparafo;
  cliente;
  constructor(
    private router: Router,
    private tipoService: TipoService,
    private libroService: LibroService,
    private parrafoService: ParrafoService,
    private publicacionService: PublicacionService,
  ) { }
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
    this.parrafoService.getParrafo(dato).suscribe(
      resparrafito => {
        this.parrafo = resparrafito;
      }, err => {
        console.log('Eror get parrafo');
      }
    );
  }
  updateLibro() {
    this.libroService.updateLibro(this.codigolibro, this.libro).suscribe(
      reslibro => {
        this.mensajelibro = reslibro;
      }, err => {
        console.log('Eror update libro');
      }
    );
  }
  updateParrafo(dato) {
    this.parrafoService.updateParrafo(dato, this.parrafo).suscribe(
      resparrafo => {
        this.mensajeparrafo = resparrafo;
      }, err => {
        console.log('Error update parrafo');
      }
    );
  }
  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    if (ev.detail.role === 'confirm') {
      console.log('Holaaaa');
    }
  }
  ngOnInit() {
    const parametro = '1';
    this.codigolibro = parametro;
    this.libroService.getLibro(parametro).suscribe(
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
