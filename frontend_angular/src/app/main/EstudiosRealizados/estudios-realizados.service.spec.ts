import { TestBed } from '@angular/core/testing';

import { EstudiosRealizadosService } from './estudios-realizados.service';

describe('EstudiosRealizadosService', () => {
  let service: EstudiosRealizadosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EstudiosRealizadosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
