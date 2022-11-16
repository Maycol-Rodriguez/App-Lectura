import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stu-content-select',
  templateUrl: './stu-content-select.page.html',
  styleUrls: ['./stu-content-select.page.scss'],
})
export class StuContentSelectPage implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
  }

  porlectura() {
    this.router.navigate(
      [
        'student',
        'stu-content',
        'stu-content-reading'
      ]
    );
  }
  porvideo() {
    this.router.navigate(
      [
        'student',
        'stu-content',
        'stu-content-video'
      ]
    );
  }
  poraudio() {
    this.router.navigate(
      [
        'student',
        'stu-content',
        'stu-content-audio'
      ]
    );
  }

}
