import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tea-home',
  templateUrl: './tea-home.page.html',
  styleUrls: ['./tea-home.page.scss'],
})
export class TeaHomePage implements OnInit {
  genero = false;
  constructor(
    private router: Router,
  ) { }

  viewstatics() {
    this.router.navigate(
      [
        'teacher',
        'tea-statistics'
      ]
    );
  }
  addbook() {
    this.router.navigate(
      [
        'teacher',
        'tea-book'
      ]
    );
  }
  ngOnInit() {
  }

}
