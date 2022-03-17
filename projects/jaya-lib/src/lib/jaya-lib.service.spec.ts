import { TestBed } from '@angular/core/testing';

import { JayaLibService } from './jaya-lib.service';

describe('JayaLibService', () => {
  let service: JayaLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JayaLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
