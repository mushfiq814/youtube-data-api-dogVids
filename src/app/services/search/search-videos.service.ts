import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SearchResponse } from 'src/app/models/searchResponse';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SearchVideosService {
  url:string = environment.youTubeUrl;
  apiKey:string = environment.apiKey;
  maxResults:string = '20';

  params:string = `&maxResults=${this.maxResults}&part=snippet&type=video&key=${this.apiKey}`
  
  // initialize the http module as private
  constructor(private http:HttpClient) { }
  
  getVideos(searchQuery:string):Observable<SearchResponse> {
    return this.http.get<SearchResponse>(this.url + "/search?q=" + searchQuery + this.params);
  }

  getNextPage(searchQuery:string, nextPageToken:string):Observable<SearchResponse> {
    if (searchQuery == undefined) searchQuery = 'dog'; // on default loading of dog videos when no search query is passed
    return this.http.get<SearchResponse>(this.url + "/search?q=" + searchQuery + this.params + `&pageToken=${nextPageToken}`);
  }
}
