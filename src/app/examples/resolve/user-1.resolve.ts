import { inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  ResolveFn,
  RouterStateSnapshot,
} from '@angular/router';
import { UserService } from '../../services/user.service';

export const user1Resolve: ResolveFn<{ id: number; name: string }[]> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  console.log('user1Resolve start');
  const userService = inject(UserService);

  return userService.getUsers();
};
