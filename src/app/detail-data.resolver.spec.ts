import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { detailDataResolver } from './detail-data.resolver';
import { UserDto } from './shared/interfaces/user.interface';

describe('detailDataResolver', () => {
  const executeResolver: ResolveFn<UserDto | undefined> = (
    ...resolverParameters
  ) =>
    TestBed.runInInjectionContext(() =>
      detailDataResolver(...resolverParameters)
    );

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
