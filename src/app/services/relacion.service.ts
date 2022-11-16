import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Relacion } from '../models/relacion';
import { GlobalService } from './global.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RelacionService {
  apiUrl = this.wasa.apiUrlGlobal + '/relacion';
  constructor(
    private http: HttpClient,
    private wasa: GlobalService
  ) { }
  getRelacions() {
    return this.http.get(`${this.apiUrl}`);
  }

  getRelacion(id: string) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  getsearchRelacionbypadre(padre: string | number) {
    return this.http.get(`${this.apiUrl}/search/sons/${padre}`);
  }

  getsearchRelacionbyhijo(hijo: string | number) {
    return this.http.get(`${this.apiUrl}/search/fathers/${hijo}`);
  }

  deleteRelacion(id: string) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  // tslint:disable-next-line: no-shadowed-variable
  saveRelacion( relacion: Relacion) {
    return this.http.post(`${this.apiUrl}/create`, relacion);
  }

  updateRelacion(id: string|number, updatedRelacion: Relacion): Observable<Relacion> {
    return this.http.put(`${this.apiUrl}/update/${id}`, updatedRelacion);
  }
}
