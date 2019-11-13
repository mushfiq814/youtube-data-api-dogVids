import { Injectable } from '@angular/core';
import { Video } from '../models/Video';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SendVideoService {
  // create new Subject to send video information
  private _newSendVideoSource = new Subject<Video>();
  // create new Observable for other components to subscribe to
  videoSource$ = this._newSendVideoSource.asObservable();

  constructor() { }

  sendVideo(video:Video) {
    this._newSendVideoSource.next(video);
  }
}
