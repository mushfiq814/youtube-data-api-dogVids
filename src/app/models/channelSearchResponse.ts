import { Channel } from './Channel';

export interface PageInfo {
  totalResults:number,
  resultsPerPage:number;
}

export interface SearchResponse {
  kind:string;
  etag:string;
  nextPageToken:string;
  regionCode:string;
  pageInfo:PageInfo;
  items:Channel[];
}