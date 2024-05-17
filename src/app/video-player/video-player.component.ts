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

  //https://www.videoindexer.ai/embed/insights/1e1039c3-2aa4-4d7d-b9d2-a41a7967441e/276af18884/?accessToken=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJWZXJzaW9uIjoiMi4wLjAuMCIsIktleVZlcnNpb24iOiI1MTBhNTI4NTRiZjg0MDIwOTZhNDZjN2I0ZWY1NTE4OCIsIkFjY291bnRJZCI6IjFlMTAzOWMzLTJhYTQtNGQ3ZC1iOWQyLWE0MWE3OTY3NDQxZSIsIkFjY291bnRUeXBlIjoiVHJpYWwiLCJWaWRlb0lkIjoiMjc2YWYxODg4NCIsIlBlcm1pc3Npb24iOiJSZWFkZXIiLCJFeHRlcm5hbFVzZXJJZCI6IjE6bGl2ZS5jb206MDAwMzAwMDA3NTdBQUQ5RCIsIlVzZXJUeXBlIjoiTWljcm9zb2Z0Q29ycEFhZCIsIklzc3VlckxvY2F0aW9uIjoiVHJpYWwiLCJuYmYiOjE3MTU5NDkzNzcsImV4cCI6MTcxNTk1MzI3NywiaXNzIjoiaHR0cHM6Ly9hcGkudmlkZW9pbmRleGVyLmFpLyIsImF1ZCI6Imh0dHBzOi8vYXBpLnZpZGVvaW5kZXhlci5haS8ifQ.AEKoQ2mpesekjnrzugNdiCNgT0e_oslVRT5vZXsD7N95VA-Jc4PvlZ4Qh7h7Svo_rO3pd5yhxb1335EMDmEeLWvamZS4E_csK2DXQRSnVQKG08OQHFADkIrtRLcdyVg-uT2UedCnrp4aYMQSzmxiq4b0dEi80TWelcMZXYXJWekbexmRVmbxyGRA2LDSeeeV0A2doyAM92SIWZs_Cd6tgJGr_dvo_zGTJqa3ELIuzZMxVfPn73okim8dsSENyEsP38zPb5vIfhHc7P_d9jRQl7819PlN_X8oCaDt5do32MEbr2x5RQGf2qfQ64umf30k0lumO0SeEvTfG9zp-OqRMg&locale=en&location=trial

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.accountId = params.get('accountId') ?? '' ;
      this.videoId = params.get('videoId') ?? '';
      this.videoUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(this.getVideoUrl());
      console.log('account id : ', this.accountId);
      console.log('video id : ', this.videoId);
      console.log('video url : ', this.getVideoUrl());
      console.log('bypassed video url : ', this.videoUrl);
    });
  }

  getVideoUrl(): string {
    const accessToken: string = this.searchService.videoToken;
    const videoUrl: string = `https://www.videoindexer.ai/embed/player/${this.accountId}/${this.videoId}/?accessToken=${accessToken}&locale=en&location=trial`;
    return videoUrl;
  }
}
