import { TestBed } from '@angular/core/testing';

import { RouteActivatedService } from './route-activated-service.service';

describe('RouteActivatedServiceService', () => {
  let service: RouteActivatedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RouteActivatedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
