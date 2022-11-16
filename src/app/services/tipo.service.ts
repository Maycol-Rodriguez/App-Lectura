import { Observable } from 'rxjs';
import { Tipo } from '../models/tipo';
import { Injectable } from '@angular/core';
import { GlobalService } from './global.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TipoService {
  apiUrl = this.wasa.apiUrlGlobal + '/tipo';
  constructor(
    private http: HttpClient,
    private wasa: GlobalService
  ) { }
  getTipos() {
    return this.http.get(`${this.apiUrl}`);
  }

  getTipo(id: string) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  deleteTipo(id: string) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  // tslint:disable-next-line: no-shadowed-variable
  saveTipo( tipo: Tipo) {
    return this.http.post(`${this.apiUrl}/create`, tipo);
  }

  updateTipo(id: string|number, updatedTipo: Tipo): Observable<Tipo> {
    return this.http.put(`${this.apiUrl}/update/${id}`, updatedTipo);
  }
}
