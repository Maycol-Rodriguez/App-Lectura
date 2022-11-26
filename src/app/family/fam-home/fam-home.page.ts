import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fam-home',
  templateUrl: './fam-home.page.html',
  styleUrls: ['./fam-home.page.scss'],
})
export class FamHomePage implements OnInit {
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
