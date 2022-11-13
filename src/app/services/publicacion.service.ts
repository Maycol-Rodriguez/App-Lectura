import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { GlobalService } from './global.service';
import { HttpClient } from '@angular/common/http';
import { Publicacion } from '../models/publicacion';

@Injectable({
  providedIn: 'root'
})
export class PublicacionService {
  apiUrl = this.wasa.apiUrlGlobal + '/publicacion';
  constructor(
    private http: HttpClient,
    private wasa: GlobalService
  ) { }
  getPublicacions() {
    return this.http.get(`${this.apiUrl}`);
  }

  getPublicacion(id: string) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  getsearchPublicacionbyautor(autor: string | number) {
    return this.http.get(`${this.apiUrl}/filter/autor/${autor}`);
  }

  getsearchPublicacionbyprocedencia(procedencia: string | number) {
    return this.http.get(`${this.apiUrl}/filter/procedencia/${procedencia}`);
  }

  getsearchPublicacionbygrado(grado: string | number) {
    return this.http.get(`${this.apiUrl}/filter/porgrado/${grado}`);
  }

  deletePublicacion(id: string) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  // tslint:disable-next-line: no-shadowed-variable
  savePublicacion( publicacion: Publicacion) {
    return this.http.post(`${this.apiUrl}/create`, publicacion);
  }

  updatePublicacion(id: string|number, updatedPublicacion: Publicacion): Observable<Publicacion> {
    return this.http.put(`${this.apiUrl}/update/${id}`, updatedPublicacion);
  }
}
