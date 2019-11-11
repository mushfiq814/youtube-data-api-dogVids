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
  nextPageToken:string = '';

  // initialize services here
  constructor(private videoService:VideoService) { }

  // query api for dog videos by default
  ngOnInit() {
    this.videoService.getVideos('dog').subscribe(res => {
      this.videos = res.items;
      this.nextPageToken = res.nextPageToken;
    });
  }

  loadMoreVideos() {
    console.log('loading more videos for: dog ' + this.searchQuery);
    this.videoService.getNextPage(this.searchQuery, this.nextPageToken).subscribe(res => {
      res.items.forEach(video => this.videos.push(video)); // TODO: implement BehaviourSubject
      this.videos.concat(res.items);      
      this.nextPageToken = res.nextPageToken;
    })
  }

  onSearch(query:string) {
    console.log('getting videos for: dog ' + query)
    this.searchQuery = query;
    this.videoService.getVideos('dog ' + this.searchQuery).subscribe(res => {
      this.videos = res.items;
      this.nextPageToken = res.nextPageToken;
    });
  }
}
