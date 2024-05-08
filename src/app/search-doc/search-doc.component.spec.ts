import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { SearchDocComponent } from './search-doc.component';

describe('SearchDocumentComponent', () => {
  let component: SearchDocComponent;
  let fixture: ComponentFixture<SearchDocComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchDocComponent ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
