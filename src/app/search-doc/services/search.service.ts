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
  text: string,
  startTime: string,
  type: string
}

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private apiUrl = 'https://func-curatorai.azurewebsites.net/query-prompt-docs?prompt=';
  private videoAPIurl = 'https://func-curatorai.azurewebsites.net/promptToVideo?prompt=';

  constructor(private http: HttpClient) { }

  search(prompt: string) {
    return this.http.get(this.apiUrl + prompt, {});
  }

  searchVideos(prompt: string) {
    return this.http.get(this.videoAPIurl + prompt, {});
  }
}