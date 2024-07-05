import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { debounceTime, distinctUntilChanged } from 'rxjs';
import { SearchService } from 'src/app/pages/fridge/services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  searchControl = new FormControl();

  constructor(
    private searchService: SearchService,
    private activeRoute: ActivatedRoute
  ) {
    this.activeRoute.queryParams.subscribe((params) => this.searchControl.patchValue(params['q']));
    this.searchControl.valueChanges.pipe(debounceTime(400), distinctUntilChanged()).subscribe((searchValue) => {
      this.onSearch(searchValue);
    });
  }

  private onSearch(searchValue: string): void {
    this.searchService.setQuery(searchValue);
  }
}
