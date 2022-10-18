import { TestBed } from '@angular/core/testing';

import { DatacallService } from './datacall.service';

describe('DatacallService', () => {
  let service: DatacallService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatacallService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
