import { TestBed } from '@angular/core/testing';

import { EvenGuardGuard } from './even-guard.guard';

describe('EvenGuardGuard', () => {
  let guard: EvenGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(EvenGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
