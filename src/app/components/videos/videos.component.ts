import { Component, OnInit } from '@angular/core';
import { VideoService } from 'src/app/services/video.service';
import { Video } from 'src/app/models/Video';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {
  videos:Video[]
  searchQuery:string;

  // initialize services here
  constructor(private videoService:VideoService) { }

  // query api for dog videos by default
  ngOnInit() {
    this.videoService.getVideos('dog').subscribe(res => this.videos = res.items);
  }

  onSearch(query:string) {
    console.log('getting videos for dog ' + query)
    this.searchQuery = query;
    this.videoService.getVideos('dog ' + this.searchQuery).subscribe(res => this.videos = res.items);
  }
}
