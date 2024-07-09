import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { RecipesService } from './recipes.service';

describe('RecipesService', () => {
  let service: RecipesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(RecipesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
