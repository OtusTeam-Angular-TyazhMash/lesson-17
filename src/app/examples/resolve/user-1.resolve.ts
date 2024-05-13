import { inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  ResolveFn,
  RouterStateSnapshot,
} from '@angular/router';
import {User, UserService} from '../../services/user.service';

export const user1Resolve: ResolveFn<User[]> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  console.log('user1Resolve start');
  const userService = inject(UserService);

  return userService.getUsers();
};
