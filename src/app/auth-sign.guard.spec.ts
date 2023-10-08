import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { authSignGuard } from './auth-sign.guard';

describe('authSignGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => authSignGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
