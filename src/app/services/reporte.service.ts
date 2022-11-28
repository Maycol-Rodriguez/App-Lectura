import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { GlobalService } from './global.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReporteService {
  apiUrl = this.wasa.apiUrlGlobal + '/live';
  constructor(
    private http: HttpClient,
    private wasa: GlobalService
  ) { }
  // reacciones por libro
  getreaccionbyLibro(libro: string | number) {
    return this.http.get(`${this.apiUrl}/reaccion/conteo/${libro}`);
  }
  // listado de lo que reaccionaron a un libro
  getlisttoreaccionbyLibro(libro: string | number, reaccion: string | number) {
    return this.http.get(`${this.apiUrl}/reaccion/list/${libro}/${reaccion}`);
  }

  // estadisticas generales por grado de los estudiantes
  getstatisticsindividual(libro: string | number, reaccion: string | number) {
    return this.http.get(`${this.apiUrl}/reaccion/list/${libro}/${reaccion}`);
  }
  // estadisticas de los estudiante de manera individual
  getstatisticsindividualdetail(libro: string | number, reaccion: string | number) {
    return this.http.get(`${this.apiUrl}/reaccion/list/${libro}/${reaccion}`);
  }

  // estadisticas de los estudiante de manera individual y detallada
  getstatisticsbygrade(libro: string | number, reaccion: string | number) {
    return this.http.get(`${this.apiUrl}/reaccion/list/${libro}/${reaccion}`);
  }

   // esto es para los reportes
  getcliente(fecha1: string, fecha2: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/live/${fecha1}/${fecha2}`);
  }
}
