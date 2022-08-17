import { TestBed } from '@angular/core/testing';

import { MouvEnAttenteService } from './mouv-en-attente.service';

describe('MouvEnAttenteService', () => {
  let service: MouvEnAttenteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MouvEnAttenteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
