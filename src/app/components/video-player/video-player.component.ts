import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetVideoService } from 'src/app/services/video/get-video.service';
import { Video } from 'src/app/models/Video';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.css']
})
export class VideoPlayerComponent implements OnInit { 
  videoId:string;
  video:Video;

  constructor(private route:ActivatedRoute, private _getVideoService:GetVideoService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.videoId = params.get('videoId');
      console.log('video ID: ' + this.videoId);
      this._getVideoService.getVideo(this.videoId).subscribe(res => this.video = res.items[0]);
      // console.log('video title: ' + this.video.snippet.title);
    });
  }

}
