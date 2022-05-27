import { TestBed } from '@angular/core/testing';

import { SportsFieldsService } from './sports-fields.service';

describe('SportsFieldsService', () => {
  let service: SportsFieldsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SportsFieldsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
