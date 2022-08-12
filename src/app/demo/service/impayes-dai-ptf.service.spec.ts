import { TestBed } from '@angular/core/testing';

import { ImpayesDaiPtfService } from './impayes-dai-ptf.service';

describe('ImpayesDaiPtfService', () => {
  let service: ImpayesDaiPtfService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImpayesDaiPtfService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
