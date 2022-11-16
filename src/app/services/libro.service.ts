import { Observable } from 'rxjs';
import { Libro } from '../models/libro';
import { Injectable } from '@angular/core';
import { GlobalService } from './global.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LibroService {
  apiUrl = this.wasa.apiUrlGlobal + '/libro';
  constructor(
    private http: HttpClient,
    private wasa: GlobalService
  ) { }
  getLibros() {
    return this.http.get(`${this.apiUrl}`);
  }

  getLibro(id: string) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  deleteLibro(id: string) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  // tslint:disable-next-line: no-shadowed-variable
  saveLibro( libro: Libro) {
    return this.http.post(`${this.apiUrl}/create`, libro);
  }

  updateLibro(id: string|number, updatedLibro: Libro): Observable<Libro> {
    return this.http.put(`${this.apiUrl}/update/${id}`, updatedLibro);
  }
}
