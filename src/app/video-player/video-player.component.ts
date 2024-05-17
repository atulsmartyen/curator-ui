import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VideoPlayerComponent implements OnInit {
  accountId: string = '';
  videoId: string = '';
  videoUrl: string = '';

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.accountId = params.get('accountid') ?? '' ;
      this.videoId = params.get('videoid') ?? '';
      this.videoUrl = this.getVideoUrl();
    });
  }

  getVideoUrl(): string {
    return `https://www.videoindexer.ai/embed/player/${this.accountId}/${this.videoId}/?accessToken=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJWZXJzaW9uIjoiMi4wLjAuMCIsIktleVZlcnNpb24iOiI1MTBhNTI4NTRiZjg0MDIwOTZhNDZjN2I0ZWY1NTE4OCIsIkFjY291bnRJZCI6IjFlMTAzOWMzLTJhYTQtNGQ3ZC1iOWQyLWE0MWE3OTY3NDQxZSIsIkFjY291bnRUeXBlIjoiVHJpYWwiLCJWaWRlb0lkIjoiMjc2YWYxODg4NCIsIlBlcm1pc3Npb24iOiJSZWFkZXIiLCJFeHRlcm5hbFVzZXJJZCI6IjE6bGl2ZS5jb206MDAwMzAwMDA3NTdBQUQ5RCIsIlVzZXJUeXBlIjoiTWljcm9zb2Z0Q29ycEFhZCIsIklzc3VlckxvY2F0aW9uIjoiVHJpYWwiLCJuYmYiOjE3MTU4Nzc1NjAsImV4cCI6MTcxNTg4MTQ2MCwiaXNzIjoiaHR0cHM6Ly9hcGkudmlkZW9pbmRleGVyLmFpLyIsImF1ZCI6Imh0dHBzOi8vYXBpLnZpZGVvaW5kZXhlci5haS8ifQ.ob_kr588la4sgITa4SAUBL7WR5LT4XP2mfeBXwrP0mOqoJ9xXDQXjd0Bnr7SVAVQYP489CHx33BG-UmQdr6pjljAA7as8cNtoeCR2dSQSVPG3EkqmIXSNwqLBY5cw5xaCtRWnMre1smSC4j2GJiq4mZfiYZFet2ZmymA5kjGbUsIyDvKRBnwxq_LwW7V0fTmEzZDrmTjlFy7VmFLzYj-Zf3RC5hr0RyiRvvUVOUKqUr9wpAGf6MDIYjOoutnk3Yb45pzhgTxAe3dXOakpY0dufpMkIVnTZr6F4K0nSOiSP9dRUMpcEYuUIJASWVeBr7rsd2oKjGugpWVdxos7JhRog&locale=en&location=trial`;
  }
}
