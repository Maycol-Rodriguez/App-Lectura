import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stu-home',
  templateUrl: './stu-home.page.html',
  styleUrls: ['./stu-home.page.scss'],
})
export class StuHomePage implements OnInit {
  genero = false;
  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
  }
  gohome() {
    this.router.navigate(
      [
        'student',
        'stu-home'
      ]
    );
  }
  readbook() {
    this.router.navigate(
      [
        'student',
        'stu-content'
      ]
    );
  }
  viewprofile() {
    this.router.navigate(
      [
        'student',
        'stu-profile'
      ]
    );
  }
  addbook() {
    this.router.navigate(
      [
        'student',
        'stu-book'
      ]
    );
  }
}
