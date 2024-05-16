import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface SearchItem {
    fileName: string,
    data: string,
    metadata: {
        page: number,
        source: string
    }
}

export interface SearchVideoItem {
  accountId: string,
  name: string,
  searchMatches: SearchMatch[]
}

export interface SearchMatch {
  startTime: string,
  type: string,
  text: string
}

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private apiUrl = 'https://func-curatorai.azurewebsites.net/query-prompt-docs?prompt=';
  private videoAPIurl = 'https://func-curatorai.azurewebsites.net/query-prompt-videos?prompt=';

  constructor(private http: HttpClient) { }

  search(prompt: string) {
    return this.http.get(this.apiUrl + prompt, {});
  }

  searchVideos(prompt: string) {
    return this.http.get(this.videoAPIurl + prompt, {});
  }
}