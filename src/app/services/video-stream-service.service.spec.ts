import { TestBed } from '@angular/core/testing';

import { VideoStreamServiceService } from './video-stream-service.service';

describe('VideoStreamServiceService', () => {
  let service: VideoStreamServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VideoStreamServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
