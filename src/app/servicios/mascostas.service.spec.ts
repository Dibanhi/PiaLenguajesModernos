import { TestBed } from '@angular/core/testing';

import { MascostasService } from './mascostas.service';

describe('MascostasService', () => {
  let service: MascostasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MascostasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
