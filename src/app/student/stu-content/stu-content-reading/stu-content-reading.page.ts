import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-stu-content-reading',
  templateUrl: './stu-content-reading.page.html',
  styleUrls: ['./stu-content-reading.page.scss'],
})
export class StuContentReadingPage implements OnInit {
  // <iframe width="560" height="315"
  // src="https://www.youtube.com/embed/uNjrPgnI9rI"
  // title="YouTube video player" frameborder="0"
  //  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  //  allowfullscreen></iframe>
  elurl;
  constructor(
    private sanitizer: DomSanitizer,
  ) { }

  ngOnInit() {
    this.elurl = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/uNjrPgnI9rI');
  }

}
