import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stu-detail',
  templateUrl: './stu-detail.page.html',
  styleUrls: ['./stu-detail.page.scss'],
})
export class StuDetailPage implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
  }
  goToHome() {
    // this.router.navigate(
    //   [
    //     'student',
    //     'stu-home'
    //   ]
    // );
    this.router.navigate(
      [
        'student',
        'stu-content',
        'stu-content-list'
      ]
    );
  }

}
