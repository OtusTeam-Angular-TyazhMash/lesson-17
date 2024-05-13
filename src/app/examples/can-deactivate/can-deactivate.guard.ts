import {
  ActivatedRouteSnapshot,
  CanDeactivateFn,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { CanDeactivateComponent } from './can-deactivate.component';

export const canDeactivate: CanDeactivateFn<CanDeactivateComponent> = (
  component: CanDeactivateComponent,
  currentRoute: ActivatedRouteSnapshot,
  currentState: RouterStateSnapshot,
  nextState: RouterStateSnapshot
): Observable<boolean> | boolean => {
  if (!component.isAllowedToLeave()) {
    return component.confirm();
  }

  return true;
};
