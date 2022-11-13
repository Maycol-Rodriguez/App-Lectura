import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { GlobalService } from './global.service';
import { HttpClient } from '@angular/common/http';
import { Responsable } from '../models/responsable';

@Injectable({
  providedIn: 'root'
})
export class ResponsableService {
  apiUrl = this.wasa.apiUrlGlobal + '/responsable';
  constructor(
    private http: HttpClient,
    private wasa: GlobalService
  ) { }
  getResponsables() {
    return this.http.get(`${this.apiUrl}`);
  }

  getResponsable(id: string) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  getsearchEstudiantebydoc(documento: string) {
    return this.http.get(`${this.apiUrl}/searchdoc/${documento}`);
  }

  deleteResponsable(id: string) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  // tslint:disable-next-line: no-shadowed-variable
  saveResponsable( responsable: Responsable) {
    return this.http.post(`${this.apiUrl}/create`, responsable);
  }

  updateResponsable(id: string|number, updatedResponsable: Responsable): Observable<Responsable> {
    return this.http.put(`${this.apiUrl}/update/${id}`, updatedResponsable);
  }
}
