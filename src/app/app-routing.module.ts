import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NotAllowedComponent } from './components/not-allowed/not-allowed.component';
import { CanActivateChildComponent } from './examples/can-activate-child/can-activate-child.component';
import { CanActivateComponent } from './examples/can-activate/can-activate.component';
import { canActivate } from './examples/can-activate/can-activate.guard';
import { CanActivateGuardClass } from './examples/can-activate/can-activate.guard.class';
import { CanDeactivateComponent } from './examples/can-deactivate/can-deactivate.component';
import { ExamplesComponent } from './examples/examples.component';
import { ResolveComponent } from './examples/resolve/resolve.component';
import { canActivateChild } from './examples/can-activate-child/can-activate-child.guard';
import { canDeactivete } from './examples/can-deactivate/can-deactivate.guard';
import { CanMatchAdminComponent } from './examples/can-match/can-match-admin/can-match-admin.component';
import { canMatchAdmin } from './examples/can-match/can-match-admin.guard';
import { CanMatchSupportComponent } from './examples/can-match/can-match-support/can-match-support.component';
import { canMatchSupport } from './examples/can-match/can-match-support.guard';
import { CanMatchCustomerComponent } from './examples/can-match/can-match-customer/can-match-customer.component';
import { canMatchCustomer } from './examples/can-match/can-match-customer.guard';
import { CanMatchDefaultComponent } from './examples/can-match/can-match-default/can-match-default.component';
import { user1Resolve } from './examples/resolve/user-1.resolve';
import { user2Resolve } from './examples/resolve/user-2.resolve';
import { RunGuardsAndResolversComponent } from './examples/run-guards-and-resolvers/run-guards-and-resolvers.component';

const AppRoutes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
  {
    path: 'not-allowed',
    component: NotAllowedComponent,
  },
  {
    path: 'examples',
    component: ExamplesComponent,
    children: [
      {
        path: 'can-activate',
        component: CanActivateComponent,
        canActivate: [canActivate, CanActivateGuardClass],
        canActivateChild: [canActivateChild],
        children: [
          {
            path: 'can-activate-child',
            component: CanActivateChildComponent,
          },
        ],
      },
      {
        path: 'can-deactivate',
        component: CanDeactivateComponent,
        canDeactivate: [canDeactivete],
      },
      {
        path: 'can-match',
        component: CanMatchAdminComponent,
        canMatch: [canMatchAdmin],
      },
      {
        path: 'can-match',
        component: CanMatchSupportComponent,
        canMatch: [canMatchSupport],
      },
      {
        path: 'can-match',
        component: CanMatchCustomerComponent,
        canMatch: [canMatchCustomer],
      },
      {
        path: 'can-match',
        component: CanMatchDefaultComponent,
      },
      {
        path: 'resolve',
        component: ResolveComponent,
        resolve: {
          users: user1Resolve,
        },
      },
      {
        path: ':id',
        component: RunGuardsAndResolversComponent,
        canActivate: [
          () => {
            console.log('canActivate');
            return true;
          },
        ],
        runGuardsAndResolvers: 'paramsChange',
      },
    ],
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(AppRoutes)],
  declarations: [NotAllowedComponent],
  exports: [RouterModule],
})
export class AppRoutingModule {}
