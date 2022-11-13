import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Progreso } from '../models/progreso';
import { GlobalService } from './global.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProgresoService {
  apiUrl = this.wasa.apiUrlGlobal + '/progreso';
  constructor(
    private http: HttpClient,
    private wasa: GlobalService
  ) { }
  getProgresos() {
    return this.http.get(`${this.apiUrl}`);
  }

  getProgreso(id: string) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  deleteProgreso(id: string) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  // tslint:disable-next-line: no-shadowed-variable
  saveProgreso( progreso: Progreso) {
    return this.http.post(`${this.apiUrl}/create`, progreso);
  }

  updateProgreso(id: string|number, updatedProgreso: Progreso): Observable<Progreso> {
    return this.http.put(`${this.apiUrl}/update/${id}`, updatedProgreso);
  }
}
