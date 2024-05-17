import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { WebSpeechModule } from './web-speech/web-speech.module';
import { UploadDocModule } from './upload-doc/upload-doc.module';
import { SearchDocModule } from './search-doc/search-doc.module';
import { VideoPlayerComponent } from './video-player/video-player.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    WebSpeechModule,
    UploadDocModule,
    SearchDocModule
  ],
  providers: [],
  bootstrap: [AppComponent, VideoPlayerComponent]
})
export class AppModule { }
