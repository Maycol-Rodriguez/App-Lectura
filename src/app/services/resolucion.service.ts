import { Observable } from 'rxjs';
import { Resolucion } from '../models/resolucion';
import { Injectable } from '@angular/core';
import { GlobalService } from './global.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ResolucionService {
  apiUrl = this.wasa.apiUrlGlobal + '/resolucion';
  constructor(
    private http: HttpClient,
    private wasa: GlobalService
  ) { }
  getResolucions() {
    return this.http.get(`${this.apiUrl}`);
  }

  getResolucion(id: string) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }
  getResolucioncuestionario(codigo: string | number) {
    return this.http.get(`${this.apiUrl}/filterprogress/${codigo}`);
  }
  getResolucioncuestionarioeintento(codigo: string | number, intento: string | number) {
    return this.http.get(`${this.apiUrl}/filterprogress/andintento/${codigo}/${intento}`);
  }

  deleteResolucion(id: string) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  // tslint:disable-next-line: no-shadowed-variable
  saveResolucion( resolucion: Resolucion) {
    return this.http.post(`${this.apiUrl}/create`, resolucion);
  }

  updateResolucion(id: string|number, updatedResolucion: Resolucion): Observable<Resolucion> {
    return this.http.put(`${this.apiUrl}/update/${id}`, updatedResolucion);
  }
}
