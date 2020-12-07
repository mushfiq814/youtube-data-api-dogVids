import { TestBed } from '@angular/core/testing';

import { SendVideoService } from './send.video.service';

describe('Send.VideoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SendVideoService = TestBed.get(SendVideoService);
    expect(service).toBeTruthy();
  });
});
