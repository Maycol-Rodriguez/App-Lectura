import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { GlobalService } from './global.service';
import { HttpClient } from '@angular/common/http';
import { Cuestionario } from '../models/cuestionario';

@Injectable({
  providedIn: 'root'
})
export class CuestionarioService {
  apiUrl = this.wasa.apiUrlGlobal + '/cuestionario';
  constructor(
    private http: HttpClient,
    private wasa: GlobalService
  ) { }
  getCuestionarios() {
    return this.http.get(`${this.apiUrl}`);
  }

  getCuestionario(id: string) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  getsearchCuestionariobylibro(libro: string) {
    return this.http.get(`${this.apiUrl}/pregunta/${libro}`);
  }

  getsearchCuestionariobygrado(grado: string | number) {
    return this.http.get(`${this.apiUrl}/filter/grado/${grado}`);
  }

  deleteCuestionario(id: string) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  // tslint:disable-next-line: no-shadowed-variable
  saveCuestionario( cuestionario: Cuestionario) {
    return this.http.post(`${this.apiUrl}/create`, cuestionario);
  }

  updateCuestionario(id: string|number, updatedCuestionario: Cuestionario): Observable<Cuestionario> {
    return this.http.put(`${this.apiUrl}/update/${id}`, updatedCuestionario);
  }
}
