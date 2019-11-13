import { Component, OnInit, Input, Output } from '@angular/core';
import { Video } from 'src/app/models/Video';
import { SendVideoService } from 'src/app/services/send.video.service';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {
  // passed in Video from VideosComponent
  @Input() video: Video;
  
  constructor(private _sendVideoService:SendVideoService) { }

  ngOnInit() { }

  selectVideo() {
    // open component in new tab
    window.open(`/video/${this.video.id.videoId}`);
    
    // send video as observable
    this._sendVideoService.sendVideo(this.video);
    console.log("Video Sent!")
  }


}
