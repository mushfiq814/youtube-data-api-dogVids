import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Video } from 'src/app/models/Video';
import { SendVideoService } from 'src/app/services/send.video.service';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.css']
})
<<<<<<< HEAD
export class VideoPlayerComponent implements OnInit {
  video:Video;

  constructor(private route:ActivatedRoute, private _sendVideoService:SendVideoService) { }

  ngOnInit() {
    console.log('Getting route parameter');

    console.log('Getting Video');
    this._sendVideoService.videoSource$.subscribe(video => {
      console.log('Video received');
      console.log(video.snippet.title);
    });
=======
export class VideoPlayerComponent implements OnInit { 
  videoId:string;
  sanitizedUrl:SafeResourceUrl;
  video:Video;
  channel:Channel;

  constructor(private router:Router, private route:ActivatedRoute, private channelService:ChannelService, private domSanitizer:DomSanitizer) {
        oldIframe[0].parentNode.removeChild(oldIframe[0]);
      }
    }

    // This code loads the IFrame Player API code asynchronously.
    let tag = document.createElement('script');
    tag.classList.add('ytIframe');
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
        events: { 
          'onReady': (event) => event.target.playVideo()
        }
      });
    }
  }
}
