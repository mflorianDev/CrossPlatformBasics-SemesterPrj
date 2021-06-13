import { TestBed } from '@angular/core/testing';

import { AquariumsService } from './aquariums.service';

describe('AquariumsService', () => {
  let service: AquariumsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AquariumsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
