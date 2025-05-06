import { Routes } from '@angular/router';
import { RxjsComponent } from './components/rxjs/rxjs.component';
import { LearnDashboardComponent } from './shared/sharedComponet/learn-dashboard/learn-dashboard.component';

export const routes: Routes = [
    { path: '', redirectTo: 'learn-dashboard', pathMatch: 'full' },
    { path: 'learn-dashboard', component: LearnDashboardComponent },
    { path: 'rxjs-operator', component: RxjsComponent }
  ];
  