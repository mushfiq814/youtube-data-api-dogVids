import { Component, OnInit } from '@angular/core';
import { SearchVideosService } from 'src/app/services/search/search-videos.service';
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
  constructor(private _searchVideoService:SearchVideosService) { }

  // query api for dog videos by default
  ngOnInit() {
    this._searchVideoService.getVideos('dog').subscribe(res => {
      this.videos = res.items;
      this.nextPageToken = res.nextPageToken;
    });
  }  

  loadMoreVideos() {
    console.log('loading more videos for: ' + this.searchQuery);
    this._searchVideoService.getNextPage(this.searchQuery, this.nextPageToken).subscribe(res => {
      res.items.forEach(video => this.videos.push(video));
      this.videos.concat(res.items);   
      this.nextPageToken = res.nextPageToken;
    })
  }

  // query api with search string
  onSearch(query:string) {
    console.log('getting videos for: dog ' + query)
    this.searchQuery = 'dog ' + query;
    this._searchVideoService.getVideos('dog ' + this.searchQuery).subscribe(res => {
      this.videos = res.items;
      this.nextPageToken = res.nextPageToken;
    });
  }
}
