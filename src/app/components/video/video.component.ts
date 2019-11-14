import { Component, OnInit, Input } from '@angular/core';
import { Video } from 'src/app/models/Video';
import { Router } from '@angular/router';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {
  // passed in Video from VideosComponent
  @Input() video: Video;
  
  constructor(private router:Router) { }

  ngOnInit() { 
    let dirtyTitle = this.video.snippet.title;
    let cleanTitle = dirtyTitle.replace(/&#(\d+);/g, (match, dec) => String.fromCharCode(dec)).replace(/&amp;/g,'&').replace(/&quot;/g,'"');                               
    this.video.snippet.title = cleanTitle;
  }

  clickHandler() {
    // open component in new tab
    window.open(`/video/${this.video.id.videoId}`);
  }


}
