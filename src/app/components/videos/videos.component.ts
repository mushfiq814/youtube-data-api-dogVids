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
  searchQuery:string;

  // initialize services here
  constructor(private videoService:VideoService) { }

  ngOnInit() {
    
  }

  onSearch(query:string) {
    console.log('getting videos for ' + query)
    this.searchQuery = query;
    this.videoService.getVideos(this.searchQuery).subscribe(res => {
      this.videos = res.items;
    });
  }
}
