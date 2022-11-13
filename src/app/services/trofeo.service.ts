import { Observable } from 'rxjs';
import { Trofeo } from '../models/trofeo';
import { Injectable } from '@angular/core';
import { GlobalService } from './global.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TrofeoService {
  apiUrl = this.wasa.apiUrlGlobal + '/trofeo';
  constructor(
    private http: HttpClient,
    private wasa: GlobalService
  ) { }
  getTrofeos() {
    return this.http.get(`${this.apiUrl}`);
  }

  getTrofeo(id: string) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  deleteTrofeo(id: string) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  // tslint:disable-next-line: no-shadowed-variable
  saveTrofeo( trofeo: Trofeo) {
    return this.http.post(`${this.apiUrl}/create`, trofeo);
  }

  updateTrofeo(id: string|number, updatedTrofeo: Trofeo): Observable<Trofeo> {
    return this.http.put(`${this.apiUrl}/update/${id}`, updatedTrofeo);
  }
}
