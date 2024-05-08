import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'upload-doc',
  templateUrl: './upload-doc.component.html',
  styleUrls: ['./upload-doc.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UploadDocComponent implements OnInit {
  documentTypes: string[] = ['pdf', 'doc', 'docx', 'txt', 'mp4', 'mp3'];
  currentDocument: string = 'pdf';

  constructor() {}
  ngOnInit(): void {}

  selectDocument(doc: string): void {
    this.currentDocument = doc;
  }

}
