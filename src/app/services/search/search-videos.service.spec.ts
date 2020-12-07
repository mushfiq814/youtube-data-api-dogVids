import { TestBed } from '@angular/core/testing';

import { SearchVideosService } from './search-videos.service';

describe('VideoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SearchVideosService = TestBed.get(SearchVideosService);
    expect(service).toBeTruthy();
  });
});
