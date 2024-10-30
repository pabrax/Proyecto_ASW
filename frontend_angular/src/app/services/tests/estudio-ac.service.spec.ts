import { TestBed } from '@angular/core/testing';

import { EstudioAcService } from '../../../services/estudio-ac.service';

describe('EstudioAcService', () => {
  let service: EstudioAcService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EstudioAcService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
