import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Video } from 'src/app/models/Video';
import { SendVideoService } from 'src/app/services/send.video.service';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.css']
})
export class VideoPlayerComponent implements OnInit {
  video:Video;

  constructor(private route:ActivatedRoute, private _sendVideoService:SendVideoService) { }

  ngOnInit() {
    console.log('Getting route parameter');
    this.route.paramMap.subscribe(params => console.log('Video ID: ' + params.get('videoId')));

    console.log('Getting Video');
    this._sendVideoService.videoSource$.subscribe(video => {
      console.log('Video received');
      console.log(video.snippet.title);
    });
  }

}
