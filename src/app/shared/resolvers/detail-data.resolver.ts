import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { UserDto } from '../interfaces/user.interface';
import { UserService } from '../services/user.service';

export const detailDataResolver: ResolveFn<UserDto | undefined> = (
  route,
  state
) => {
  const data = inject(UserService).getUserById(Number(route.params['id']));
  return data;
};
