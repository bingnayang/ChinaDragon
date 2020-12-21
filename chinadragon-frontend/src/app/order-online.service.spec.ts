import { TestBed } from '@angular/core/testing';

import { OrderOnlineService } from './order-online.service';

describe('OrderOnlineService', () => {
  let service: OrderOnlineService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrderOnlineService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
