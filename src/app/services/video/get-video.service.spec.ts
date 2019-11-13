import { TestBed } from '@angular/core/testing';

import { GetVideoService } from './get-video.service';

describe('GetVideoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetVideoService = TestBed.get(GetVideoService);
    expect(service).toBeTruthy();
  });
});
