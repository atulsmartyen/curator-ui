import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SearchItem, SearchService } from './services/search.service';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'search-doc',
  templateUrl: './search-doc.component.html',
  styleUrls: ['./search-doc.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchDocComponent implements OnInit {
  searchText: string = '';
  searchedItems: Observable<any[] | undefined> = of([]);

  constructor(private route: ActivatedRoute, private searchService: SearchService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.searchText = params.get('input') ?? '' ;
      this.onSearch();
    });
  }

  onSearch() {
    this.searchedItems = this.searchItemsBasedOnPrompt(this.searchText)
      .pipe(
        map((data: any) => {
          return (Object.values(data) as Array<SearchItem[]>)
            .flat()
            .map((item: SearchItem) => ({
              title: item.fileName,
              subtitle: `Page: ${item.metadata.page}`,
              description: item.data
            })
          );
        }));
  }

  searchItemsBasedOnPrompt(prompt: string) {
    return this.searchService.search(prompt);
  }
}
