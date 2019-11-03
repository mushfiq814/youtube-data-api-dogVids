import { Video } from './Video'

export interface PageInfo {
  totalResults:number,
  resultsPerPage:number;
}

export class SearchResponse {
  kind:string;
  etag:string;
  nextPageToken:string;
  regionCode:string;
  pageInfo:PageInfo;
  items:Video[];
}

let searchResponseJson:Object = {
  "kind": "youtube#searchListResponse",
  "etag": "\"j6xRRd8dTPVVptg711_CSPADRfg/dS4ccK7HU5VjKIgrOh9QVwcm75E\"",
  "nextPageToken": "CAUQAA",
  "regionCode": "US",
  "pageInfo": {
      "totalResults": 1000000,
      "resultsPerPage": 5
  },
  "items": [
      "Video"
  ]
}