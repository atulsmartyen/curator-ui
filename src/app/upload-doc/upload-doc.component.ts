import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { UploadService } from './services/upload.service';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';

@Component({
  selector: 'upload-doc',
  templateUrl: './upload-doc.component.html',
  styleUrls: ['./upload-doc.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UploadDocComponent implements OnInit {
  documentTypes: string[] = ['pdf', 'doc', 'docx', 'txt', 'mp4', 'mp3'];
  currentDocument: string = 'pdf';
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor(
    private uploadService: UploadService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {}

  selectDocument(doc: string): void {
    this.currentDocument = doc;
  }

  uploadFile(event: any): void {
    const file: File = event.target.files[0];
    if (!file || file.type !== 'application/pdf') {
      this.handleFileUploadError();
      return;
    }

    this.uploadService.uploadFile(file)
      .subscribe(response => {
        this.handleFileUploadSuccess(file.name);
        console.log(response);
      }, error => {
        this.handleFileUploadError("Error in file upload");
      });
  }

  
  handleFileUploadError(error: string = '') {
    this.snackBar
    .open(
      !!error ? error : 'Invalid file type. Only PDF files are allowed.',
      'Close', {
        horizontalPosition: this.horizontalPosition,
        verticalPosition : this.verticalPosition,
        duration: 3000
      });
  }

  handleFileUploadSuccess(fileName: string) {
    this.snackBar
    .open(
      `File ${fileName} Uploaded Successfully`,
      'Close', {
        horizontalPosition: this.horizontalPosition,
        verticalPosition : this.verticalPosition,
        duration: 3000,
      });
  }
}
