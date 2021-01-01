import { TestBed } from '@angular/core/testing';

import { HttpIntercepterBaseAuthServiceService } from './http-intercepter-base-auth-service.service';

describe('HttpIntercepterBaseAuthServiceService', () => {
  let service: HttpIntercepterBaseAuthServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpIntercepterBaseAuthServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
