export interface Id {
  kind: string;
  videoId: string;
}

export interface Default {
  url: string;
  width: number;
  height: number;
}

export interface Medium {
  url: string;
  width: number;
  height: number;
}

export interface High {
  url: string;
  width: number;
  height: number;
}

export interface Thumbnails {
  default: Default;
  medium: Medium;
  high: High;
}

export interface Snippet {
  publishedAt: Date;
  channelId: string;
  title: string;
  description: string;
  thumbnails: Thumbnails;
  channelTitle: string;
  liveBroadcastContent: string;
}

export interface Video {
  kind: string;
  etag: string;
  id: Id;
  snippet: Snippet;
}

let videoJson = {
  "kind": "youtube#searchResult",
  "etag": "\"j6xRRd8dTPVVptg711_CSPADRfg/Si9XCwcmv-fB90X6EhuZlegzLhM\"",
  "id": {
    "kind": "youtube#video",
    "videoId": "VpATBBRajP8"
  },
  "snippet": {
    "publishedAt": "2019-05-16T13:01:38.000Z",
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
}


// export class Video {
//   id:string;
//   title:string;
//   description:string;
//   channelId:string;
//   thumbUri:string;

//   constructor(json:any) {
//     this.id = json.id.videoId;
//     this.title = json.snippet.title;
//     this.description = json.snippet.description;
//     this.channelId = json.snippet.channelId;
//     this.thumbUri = json.snippet.thumbnails.medium.url;
//   }
// }