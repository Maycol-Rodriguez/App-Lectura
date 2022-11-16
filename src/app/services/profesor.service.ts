import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Profesor } from '../models/profesor';
import { GlobalService } from './global.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfesorService {
  apiUrl = this.wasa.apiUrlGlobal + '/profesor';
  constructor(
    private http: HttpClient,
    private wasa: GlobalService
  ) { }
  getProfesors() {
    return this.http.get(`${this.apiUrl}`);
  }

  getsearchProfesorbydoc(documento: string) {
    return this.http.get(`${this.apiUrl}/searchdoc/${documento}`);
  }

  getProfesor(id: string) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  deleteProfesor(id: string) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  // tslint:disable-next-line: no-shadowed-variable
  saveProfesor( profesor: Profesor) {
    return this.http.post(`${this.apiUrl}/create`, profesor);
  }

  updateProfesor(id: string|number, updatedProfesor: Profesor): Observable<Profesor> {
    return this.http.put(`${this.apiUrl}/update/${id}`, updatedProfesor);
  }
}
