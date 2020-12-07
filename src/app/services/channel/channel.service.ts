import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { SearchResponse } from 'src/app/models/channelSearchResponse';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChannelService {
  url:string = environment.youTubeUrl;
  apiKey:string = environment.apiKey;

  params:string = `&part=snippet&type=channel&key=${this.apiKey}`;  
  
  // initialize the http module as private
  constructor(private http:HttpClient) { }
  
  getChannel(channelId:string):Observable<SearchResponse> {
    return this.http.get<SearchResponse>(this.url + "/channels?id=" + channelId + this.params);
  }
}
