import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Parrafo } from '../models/parrafo';
import { GlobalService } from './global.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ParrafoService {
  apiUrl = this.wasa.apiUrlGlobal + '/parrafo';
  constructor(
    private http: HttpClient,
    private wasa: GlobalService
  ) { }
  getParrafos() {
    return this.http.get(`${this.apiUrl}`);
  }

  getParrafo(id: string) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  getsearchParrafobylibro(libro: string | number) {
    return this.http.get(`${this.apiUrl}/filter/libro/${libro}`);
  }

  getsearchParrafobylibroandtipo(tipo: string | number, libro: string | number) {
    return this.http.get(`${this.apiUrl}/filter/partes/${tipo}/${libro}`);
  }

  deleteParrafo(id: string) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  // tslint:disable-next-line: no-shadowed-variable
  saveParrafo( parrafo: Parrafo) {
    return this.http.post(`${this.apiUrl}/create`, parrafo);
  }

  updateParrafo(id: string|number, updatedParrafo: Parrafo): Observable<Parrafo> {
    return this.http.put(`${this.apiUrl}/update/${id}`, updatedParrafo);
  }
}
