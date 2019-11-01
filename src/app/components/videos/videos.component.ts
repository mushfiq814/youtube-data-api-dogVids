import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Video } from 'src/app/models/Video';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {
  // apiKey:string = environment.apiKey;

  videos:Video[]

  constructor() { }

  ngOnInit() {
    this.videos = [
      {
        "id": "VpATBBRajP8",
        "title": "Slipknot - Unsainted [OFFICIAL VIDEO]",
        "description": "Subscribe: https://knot1.co/subscribe Directed by M. Shawn Crahan Get \"Unsainted\" : http://slipknot1.lnk.to/wanyk Site: http://slipknot1.com iTunes: ...",
        "channelId": "UCOJZ1tna8yj8mAEITPkHNCQ",
        thumbUri:"https://i.ytimg.com/vi/VpATBBRajP8/mqdefault.jpg",
      },
      {
        "id": "V3ADK6gsDGg",
        "title": "Slipknot - Solway Firth [OFFICIAL VIDEO]",
        "description": "Subscribe: https://knot1.co/subscribe Get \"Solway Firth\" : http://slipknot1.lnk.to/wanyk \"Solway Firth” | New song & video out now, featuring footage from the new ...",
        "channelId": "UCOJZ1tna8yj8mAEITPkHNCQ",
        thumbUri:"https://i.ytimg.com/vi/V3ADK6gsDGg/mqdefault.jpg",
      },
      {
        "id": "XEEasR7hVhA",
        "title": "Slipknot - The Devil In I [OFFICIAL VIDEO]",
        "description": "Slipknot's music video for 'The Devil In I' from the album, .5: The Gray Chapter - available now on Roadrunner Records. Download it at ...",
        "channelId": "UCOJZ1tna8yj8mAEITPkHNCQ",
        thumbUri:"https://i.ytimg.com/vi/XEEasR7hVhA/mqdefault.jpg",
      },
      {
        "id": "5abamRO41fE",
        "title": "Slipknot - Psychosocial [OFFICIAL VIDEO]",
        "description": "Slipknot's music video for 'Psychosocial' from the album, All Hope Is Gone - available now on Roadrunner Records. Download the album on iTunes: ...",
        "channelId": "UCOJZ1tna8yj8mAEITPkHNCQ",
        thumbUri:"https://i.ytimg.com/vi/5abamRO41fE/mqdefault.jpg",
      },
      {
        "id": "6fVE8kSM43I",
        "title": "Slipknot - Duality [OFFICIAL VIDEO]",
        "description": "Slipknot's music video for 'Duality' from the album, Vol. 3: (The Subliminal Verses) - available now on Roadrunner Records. Download it at ...",
        "channelId": "UCOJZ1tna8yj8mAEITPkHNCQ",
        thumbUri:"https://i.ytimg.com/vi/6fVE8kSM43I/mqdefault.jpg",
      }
    ];
  }
}
