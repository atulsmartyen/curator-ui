import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface UploadItem {
  file: File
}

@Injectable({
  providedIn: 'root'
})
export class UploadService {
  private apiUrl = 'https://func-curatorai.azurewebsites.net/upload-file';

  constructor(private http: HttpClient) { }

  uploadFile(file: File) {
    const formData = new FormData();
    formData.append('file', file);

    return this.http.post(this.apiUrl, formData);
  }
}