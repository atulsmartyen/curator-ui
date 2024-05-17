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
  thumbnailVideoId: string,
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
  private tokenUrl = 'https://func-curatorai.azurewebsites.net/get-token';
  public videoToken: string = '';

  constructor(private http: HttpClient) {
    this.getVideoToken().subscribe((data: any) => {
      this.videoToken = data;
    });
  }

  search(prompt: string) {
    return this.http.get(this.apiUrl + prompt, {});
  }

  searchVideos(prompt: string) {
    return this.http.get(this.videoAPIurl + prompt, {});
  }

  getVideoToken() {
    return this.http.get(this.tokenUrl, {});
  }
}