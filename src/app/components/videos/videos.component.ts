import { Component, OnInit } from '@angular/core';
// import { environment } from 'src/environments/environment';
import { VideoService } from 'src/app/services/video.service';
import { Video } from 'src/app/models/Video';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {
  videos:Video[]

  // initialize services here
  constructor(private videoService:VideoService) { }

  ngOnInit() {
    this.videoService.getVideos().subscribe(res => {
      this.videos = res.items;
    });
  }
}
