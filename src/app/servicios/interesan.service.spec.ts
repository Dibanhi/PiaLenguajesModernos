import { TestBed } from '@angular/core/testing';

import { InteresanService } from './interesan.service';

describe('InteresanService', () => {
  let service: InteresanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InteresanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
