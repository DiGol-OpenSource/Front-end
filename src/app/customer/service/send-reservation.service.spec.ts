import { TestBed } from '@angular/core/testing';

import { SendReservationService } from './send-reservation.service';

describe('SendReservationService', () => {
  let service: SendReservationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SendReservationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
