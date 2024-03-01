import { TestBed } from '@angular/core/testing';

import { FormInteracaoService } from './form-interacao.service';

describe('FormInteracaoService', () => {
  let service: FormInteracaoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormInteracaoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
