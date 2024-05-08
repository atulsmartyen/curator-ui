import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploadDocComponent } from './upload-doc.component';
import { MaterialModule } from '../shared/material/material.module';


@NgModule({
  declarations: [UploadDocComponent],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class UploadDocModule { }
