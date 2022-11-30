import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  public apiUrlGlobal = 'https://promoting-reading-in-students.herokuapp.com';
  constructor() { }
}
