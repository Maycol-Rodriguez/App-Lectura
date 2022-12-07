import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tea-statistics-forstudent',
  templateUrl: './tea-statistics-forstudent.page.html',
  styleUrls: ['./tea-statistics-forstudent.page.scss'],
})
export class TeaStatisticsForstudentPage implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
  }
  goToCuento() {
    this.router.navigate(
      [
        'teacher',
        'tea-statistics',
        'tea-statistics-forstudent-libro'
      ]
    );
  }
}
