import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  public apiUrlGlobal = 'https://elproyectoeca.herokuapp.com';
  constructor() { }
}
