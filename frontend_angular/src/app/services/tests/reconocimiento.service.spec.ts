import { TestBed } from '@angular/core/testing';

import { ReconocimientoService } from '../../../services/reconocimiento.service';

describe('ReconocimientoService', () => {
  let service: ReconocimientoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReconocimientoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
