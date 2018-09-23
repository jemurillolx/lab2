import { TestBed } from '@angular/core/testing';

import { PersonservicesService } from './personservices.service';

describe('PersonservicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PersonservicesService = TestBed.get(PersonservicesService);
    expect(service).toBeTruthy();
  });
});
