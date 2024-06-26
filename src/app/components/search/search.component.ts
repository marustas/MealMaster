import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs';
import { SearchService } from 'src/app/pages/fridge/services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  searchControl = new FormControl();

  constructor(private searchService: SearchService) {
    this.searchControl.valueChanges.pipe(debounceTime(400), distinctUntilChanged()).subscribe((searchValue) => {
      this.onSearch(searchValue);
    });
  }

  private onSearch(searchValue: string): void {
    this.searchService.setQuery(searchValue);
  }
}
