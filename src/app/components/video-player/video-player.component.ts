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
      this._getVideoService.getVideo(this.videoId).subscribe(res => this.video = res.items[0]);
    });

    this.loadYTIframe();
  }

  loadYTIframe() {
    // This code loads the IFrame Player API code asynchronously.
    let tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    let firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    // This function creates an <iframe> (and YouTube player) after the API code downloads.
    window['onYouTubeIframeAPIReady'] = () => {
      new window['YT'].Player('player', {
        videoId: this.videoId,
        playerVars: {
          rel: 0,
          color: 'white',
        },
        events: { 'onReady': (event) => event.target.playVideo() }
      });
    }
  }
}
