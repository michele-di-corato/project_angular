import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { oddGuardGuard } from './odd-guard.guard';

describe('oddGuardGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => oddGuardGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
