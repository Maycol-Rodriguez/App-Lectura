import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  ellibro = new BehaviorSubject<string>(null);
  ellibro$ = this.ellibro.asObservable();
  constructor(

  ) { }
  rentedbook(dato) {
    const numlibro = dato;
    this.ellibro.next(numlibro);
    localStorage.setItem('ellibro', numlibro);
  }
  returnedbook() {
    this.ellibro.next(null);
    localStorage.removeItem('ellibro');
  }
  isRentBook(): boolean {
    if (localStorage.getItem('ellibro')) {
      console.log('hay libro escojido');
      return true;
    } else {
      console.log('¿no hay libro escojido');
      return false;
    }
  }
}
