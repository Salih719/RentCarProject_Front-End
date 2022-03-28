import { TestBed } from '@angular/core/testing';

import { CarcarcarService } from './carcarcar.service';

describe('CarcarcarService', () => {
  let service: CarcarcarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarcarcarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
