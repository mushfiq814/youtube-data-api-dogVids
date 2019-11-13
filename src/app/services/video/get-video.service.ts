import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SearchResponse } from 'src/app/models/searchResponse';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GetVideoService {
  url:string = environment.youTubeUrl;
  apiKey:string = environment.apiKey;

  params:string = `&part=snippet&type=video&key=${this.apiKey}`;
  
  // initialize the http module as private
  constructor(private http:HttpClient) { }
  
  getVideo(videoId:string):Observable<SearchResponse> {
    return this.http.get<SearchResponse>(this.url + "/videos?id=" + videoId + this.params);
  }
}
