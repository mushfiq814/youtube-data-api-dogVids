import { Component, OnInit, Input } from '@angular/core';
import { Video } from 'src/app/models/Video';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {
  // passed in Video from VideosComponent
  @Input() video: Video;
  
  constructor() { }

  ngOnInit() {
    
  }

}
