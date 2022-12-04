import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tea-statistics-home',
  templateUrl: './tea-statistics-home.page.html',
  styleUrls: ['./tea-statistics-home.page.scss'],
})
export class TeaStatisticsHomePage implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
  }
  goToStudent() {
    this.router.navigate(
      [
        'teacher',
        'tea-statistics',
        'tea-statistics-forstudent'
      ]
    );
  }
}
