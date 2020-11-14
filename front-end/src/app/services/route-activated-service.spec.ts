import { TestBed } from '@angular/core/testing';

import { RouteActivatedServiceService } from './route-activated-service.service';

describe('RouteActivatedServiceService', () => {
  let service: RouteActivatedServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RouteActivatedServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
