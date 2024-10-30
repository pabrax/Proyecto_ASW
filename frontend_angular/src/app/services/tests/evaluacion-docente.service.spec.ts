import { TestBed } from '@angular/core/testing';

import { EvaluacionDocenteService } from './evaluacion-docente.service';

describe('EvaluacionDocenteService', () => {
  let service: EvaluacionDocenteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EvaluacionDocenteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
