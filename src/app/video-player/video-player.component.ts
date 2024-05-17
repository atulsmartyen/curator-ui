import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SearchService } from '../search-doc/services/search.service';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VideoPlayerComponent implements OnInit {
  accountId: string = '';
  videoId: string = '';
  videoUrl: SafeUrl = '';

  constructor(
    private route: ActivatedRoute,
    private searchService: SearchService,
    public domSanitizer: DomSanitizer
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.accountId = params.get('accountid') ?? '' ;
      this.videoId = params.get('videoid') ?? '';
      this.videoUrl = this.getVideoUrl();
    });
  }

  getVideoUrl(): SafeUrl {
    const videoUrl: string = `https://www.videoindexer.ai/embed/player/${this.accountId}/${this.videoId}/?accessToken=${this.searchService.videoToken}&locale=en&location=trial`;
    return this.domSanitizer.bypassSecurityTrustResourceUrl(videoUrl);
  }
}
