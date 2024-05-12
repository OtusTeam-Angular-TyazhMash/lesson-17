import { inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  ResolveFn,
  RouterStateSnapshot,
} from '@angular/router';
import { UserService } from '../../services/user.service';

export const user2Resolve: ResolveFn<{ id: number; name: string }[]> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  console.log('user2Resolve start');
  const userService = inject(UserService);

  return userService.getUsers(2000);
};
