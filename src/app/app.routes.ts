import { Routes } from '@angular/router';
import { RxjsComponent } from './components/rxjs/rxjs.component';
import { LearnDashboardComponent } from './shared/sharedComponet/learn-dashboard/learn-dashboard.component';
import { CrudOperationComponent } from './components/crud-operation/crud-operation.component';

export const routes: Routes = [
    { path: '', redirectTo: 'learn-dashboard', pathMatch: 'full' },
    { path: 'learn-dashboard', component: LearnDashboardComponent },
    { path: 'rxjs-operator', component: RxjsComponent },
    { path: 'crud-operation', component: CrudOperationComponent }
  ];
  