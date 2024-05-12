import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { ExamplesComponent } from './examples/examples.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CanActivateComponent } from './examples/can-activate/can-activate.component';
import { CanActivateChildComponent } from './examples/can-activate-child/can-activate-child.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CanDeactivateComponent } from './examples/can-deactivate/can-deactivate.component';
import { ResolveComponent } from './examples/resolve/resolve.component';
import { RunGuardsAndResolversComponent } from './examples/run-guards-and-resolvers/run-guards-and-resolvers.component';

@NgModule({
  imports: [CommonModule, BrowserModule, AppRoutingModule, ReactiveFormsModule],
  declarations: [
    AppComponent,
    DashboardComponent,

    // Examples
    ExamplesComponent,
    CanActivateComponent,
    CanActivateChildComponent,
    CanDeactivateComponent,
    ResolveComponent,
    RunGuardsAndResolversComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
