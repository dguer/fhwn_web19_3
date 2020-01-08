import { TestBed } from '@angular/core/testing';

import { HttpDataLoaderService } from './http-data-loader.service';

describe('HttpDataLoaderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HttpDataLoaderService = TestBed.get(HttpDataLoaderService);
    expect(service).toBeTruthy();
  });
});
