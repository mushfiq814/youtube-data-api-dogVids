import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Video } from 'src/app/models/Video';
import { Channel } from 'src/app/models/Channel';
import { ChannelService } from 'src/app/services/channel/channel.service';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.css']
})
export class VideoPlayerComponent implements OnInit { 
  videoId:string;
  video:Video;
  channel:Channel;

  constructor(private router:Router, private route:ActivatedRoute, private channelService:ChannelService) {
    this.router.getCurrentNavigation().extras.state; // save passed in state to history
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => this.videoId = params.get('videoId')); // get passed in videoId
    this.video = history.state; // get video from history
    this.channelService.getChannel(this.video.snippet.channelId).subscribe(channel => this.channel = channel.items[0]); // get channel details
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
