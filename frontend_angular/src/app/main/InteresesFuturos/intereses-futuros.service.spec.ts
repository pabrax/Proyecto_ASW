import { TestBed } from '@angular/core/testing';

import { InteresesFuturosService } from './intereses-futuros.service';

describe('InteresesFuturosService', () => {
  let service: InteresesFuturosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InteresesFuturosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
