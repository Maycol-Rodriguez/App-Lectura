import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  ellibro = new BehaviorSubject<number>(null);
  ellibro$ = this.ellibro.asObservable();
  acompaniante = new BehaviorSubject<number>(null);
  acompaniante$ = this.acompaniante.asObservable();
  constructor(

  ) { }
  saveaconpaniante(dato) {
    const numacompaniante = dato;
    this.ellibro.next(numacompaniante);
    localStorage.setItem('elacompaniante', numacompaniante);
  }
  rentedbook(dato) {
    const numlibro = dato;
    this.ellibro.next(numlibro);
    localStorage.setItem('ellibro', numlibro);
  }
  sinaconpaniante() {
    this.acompaniante.next(null);
    localStorage.removeItem('elacompaniante');
  }
  returnedbook() {
    this.ellibro.next(null);
    localStorage.removeItem('ellibro');
  }
  isAconpaniante(): boolean {
    if (localStorage.getItem('elacompaniante')) {
      console.log('hay  aconpaniante');
      return true;
    } else {
      console.log('¿no hay aconpaniante');
      return false;
    }
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
