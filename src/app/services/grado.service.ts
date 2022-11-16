import { Observable } from 'rxjs';
import { Grado } from '../models/grado';
import { Injectable } from '@angular/core';
import { GlobalService } from './global.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GradoService {
  apiUrl = this.wasa.apiUrlGlobal + '/grado';
  constructor(
    private http: HttpClient,
    private wasa: GlobalService
  ) { }
  getGrados() {
    return this.http.get(`${this.apiUrl}`);
  }

  getGrado(id: string) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  deleteGrado(id: string) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  // tslint:disable-next-line: no-shadowed-variable
  saveGrado( grado: Grado) {
    return this.http.post(`${this.apiUrl}/create`, grado);
  }

  updateGrado(id: string|number, updatedGrado: Grado): Observable<Grado> {
    return this.http.put(`${this.apiUrl}/update/${id}`, updatedGrado);
  }
}
