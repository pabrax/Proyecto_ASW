import { TestBed } from '@angular/core/testing';

import { ApoyoProfesoralService } from '../../../services/apoyo-profesoral.service';

describe('ApoyoProfesoralService', () => {
  let service: ApoyoProfesoralService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApoyoProfesoralService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
