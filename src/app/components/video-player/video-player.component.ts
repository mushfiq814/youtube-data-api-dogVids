import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Video } from 'src/app/models/Video';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.css']
})
export class VideoPlayerComponent implements OnInit { 
  videoId:string;
  video:Video;

  constructor(private router:Router) {
    this.router.getCurrentNavigation().extras.state; // save passed in state to history
   }

  ngOnInit() {
    this.video = history.state; // set video
    this.loadYTIframe(); // load iframe
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
        videoId: this.video.id.videoId,
        playerVars: {
          rel: 0,
          color: 'white',
        },
        events: { 
          'onReady': (event) => event.target.playVideo()
        }
      });
    }
  }
}
