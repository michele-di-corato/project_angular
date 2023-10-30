import { CanActivateFn } from '@angular/router';

export const oddGuardGuard: CanActivateFn = (route, state) => {
  const id = route.params['id'];
  if (id % 2 == 0) {
    return false;
  }
  return true;
};
