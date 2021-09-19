import { TestBed } from '@angular/core/testing';

import { ConcertTicketsService } from './concert-tickets.service';

describe('ConcertTicketsService', () => {
  let service: ConcertTicketsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConcertTicketsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
