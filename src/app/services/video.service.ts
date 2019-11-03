import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SearchResponse } from 'src/app/models/searchResponse';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VideoService {
  url:string = 'https://www.googleapis.com/youtube/v3';
  query:string = 'dog';
  maxResults:string = '10';
  searchEndpoint:string = 'search';
  type:string ='video';
  part:string = 'snippet';
  apiKey:string = '';

  params:string = `/search?q=${this.query}&maxResults=${this.maxResults}&part=${this.part}&type=${this.type}&key=${this.apiKey}`

  // initialize the http module as private
  constructor(private http:HttpClient) { }

  getVideos():Observable<SearchResponse> {
    return this.http.get<SearchResponse>(this.url + this.params);
  }
}
