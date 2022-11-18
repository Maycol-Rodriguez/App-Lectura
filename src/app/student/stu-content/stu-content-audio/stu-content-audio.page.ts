import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-stu-content-audio',
  templateUrl: './stu-content-audio.page.html',
  styleUrls: ['./stu-content-audio.page.scss'],
})
export class StuContentAudioPage implements OnInit {
  // <iframe width="560" height="315"
  // src="https://www.youtube.com/embed/uNjrPgnI9rI"
  // title="YouTube video player" frameborder="0"
  //  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  //  allowfullscreen></iframe>
  constructor(
    private sanitizer: DomSanitizer,
  ) { }

  ngOnInit() {
    
  }

}
