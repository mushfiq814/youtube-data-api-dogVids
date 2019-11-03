import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Video } from '../models/Video';
import { SearchResponse } from '../models/searchResponse';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VideoService {
  url:string = 'https://www.googleapis.com/youtube/v3';
  query:string = 'slipknot';
  maxResults:string = '5';
  searchEndpoint:string = 'search';
  type:string ='video';
  part:string = 'snippet';
  apiKey:string = '';

  params:string = `/search?q=${this.query}&maxResults=${this.maxResults}&part=${this.part}&type=${this.type}&key=${this.apiKey}`

  // initialize the http module as private
  constructor(private http:HttpClient) { }

  getVideos():Video[] {
    // let videos;
    // let res = this.http.get(this.url + this.params);
    // res.subscribe(e => {
    //   videos = new Video(JSON.parse(e.items));
    //   console.log(videos);
    // });

    return [
      {
        "kind": "youtube#searchResult",
        "etag": "\"j6xRRd8dTPVVptg711_CSPADRfg/Si9XCwcmv-fB90X6EhuZlegzLhM\"",
        "id": {
          "kind": "youtube#video",
          "videoId": "VpATBBRajP8"
        },
        "snippet": {
          "publishedAt": new Date("2019-05-16T13:01:38.000Z"),
          "channelId": "UCOJZ1tna8yj8mAEITPkHNCQ",
          "title": "Slipknot - Unsainted [OFFICIAL VIDEO]",
          "description": "Subscribe: https://knot1.co/subscribe Directed by M. Shawn Crahan Get \"Unsainted\" : http://slipknot1.lnk.to/wanyk Site: http://slipknot1.com iTunes: ...",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/VpATBBRajP8/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/VpATBBRajP8/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/VpATBBRajP8/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Slipknot",
          "liveBroadcastContent": "none"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "\"j6xRRd8dTPVVptg711_CSPADRfg/Si9XCwcmv-fB90X6EhuZlegzLhM\"",
        "id": {
          "kind": "youtube#video",
          "videoId": "VpATBBRajP8"
        },
        "snippet": {
          "publishedAt": new Date("2019-05-16T13:01:38.000Z"),
          "channelId": "UCOJZ1tna8yj8mAEITPkHNCQ",
          "title": "Slipknot - Unsainted [OFFICIAL VIDEO]",
          "description": "Subscribe: https://knot1.co/subscribe Directed by M. Shawn Crahan Get \"Unsainted\" : http://slipknot1.lnk.to/wanyk Site: http://slipknot1.com iTunes: ...",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/VpATBBRajP8/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/VpATBBRajP8/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/VpATBBRajP8/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Slipknot",
          "liveBroadcastContent": "none"
        }
      },
    ]
  }
}
