import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Obtencion } from '../models/obtencion';
import { GlobalService } from './global.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ObtencionService {
  apiUrl = this.wasa.apiUrlGlobal + '/obtencion';
  constructor(
    private http: HttpClient,
    private wasa: GlobalService
  ) { }
  getObtencions() {
    return this.http.get(`${this.apiUrl}`);
  }

  getObtencion(id: string) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  getsearchObtencionbyestudiante(estudiante: string | number) {
    return this.http.get(`${this.apiUrl}/search/${estudiante}`);
  }

  deleteObtencion(id: string) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  // tslint:disable-next-line: no-shadowed-variable
  saveObtencion( obtencion: Obtencion) {
    return this.http.post(`${this.apiUrl}/create`, obtencion);
  }

  updateObtencion(id: string|number, updatedObtencion: Obtencion): Observable<Obtencion> {
    return this.http.put(`${this.apiUrl}/update/${id}`, updatedObtencion);
  }
}
