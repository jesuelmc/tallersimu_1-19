import { TestBed } from '@angular/core/testing';

import { SimuService } from './simu.service';

describe('SimuService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SimuService = TestBed.get(SimuService);
    expect(service).toBeTruthy();
  });
});
