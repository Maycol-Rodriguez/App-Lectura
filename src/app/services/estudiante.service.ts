import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { GlobalService } from './global.service';
import { Estudiante } from '../models/estudiante';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EstudianteService {
  apiUrl = this.wasa.apiUrlGlobal + '/estudiante';
  constructor(
    private http: HttpClient,
    private wasa: GlobalService
  ) { }
  getEstudiantes() {
    return this.http.get(`${this.apiUrl}`);
  }

  getEstudiante(id: string) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  getsearchEstudiantebydoc(documento: string | number) {
    return this.http.get(`${this.apiUrl}/searchdoc/${documento}`);
  }

  getsearchEstudiantebygrado(grado: string | number) {
    return this.http.get(`${this.apiUrl}/filter/grado/${grado}`);
  }

  deleteEstudiante(id: string) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  // tslint:disable-next-line: no-shadowed-variable
  saveEstudiante( estudiante: Estudiante) {
    return this.http.post(`${this.apiUrl}/create`, estudiante);
  }

  updateEstudiante(id: string|number, updatedEstudiante: Estudiante): Observable<Estudiante> {
    return this.http.put(`${this.apiUrl}/update/${id}`, updatedEstudiante);
  }
}
