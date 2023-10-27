import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { UserService } from './shared/services/user.service';
import { UserDto } from './shared/interfaces/user.interface';

export const detailDataResolver: ResolveFn<UserDto | undefined> = (
  route,
  state
) => {
  const data = inject(UserService).getUserById(Number(route.params['id']));
  return data;
};
