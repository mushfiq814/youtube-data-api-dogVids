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

export interface Localized {
  title: string;
  description: string;
}

export interface Snippet {
  title: string;
  description: string;
  customUrl: string;
  publishedAt: String;
  thumbnails: Thumbnails;
  localized: Localized;
  country: string;
}

export interface Channel {
  kind: string;
  etag: string;
  id: string;
  snippet: Snippet;
}

