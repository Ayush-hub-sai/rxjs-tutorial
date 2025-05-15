import { Routes } from '@angular/router';
import { RxjsComponent } from './components/rxjs/rxjs.component';
import { LearnDashboardComponent } from './shared/sharedComponet/learn-dashboard/learn-dashboard.component';
import { CrudOperationComponent } from './components/crud-operation/crud-operation.component';
import { RendererTutorialComponent } from './components/renderer-tutorial/renderer-tutorial.component';
import { ViesEncapsulationsComponent } from './components/vies-encapsulations/vies-encapsulations.component';
import { PagenotfoundComponent } from './shared/sharedComponet/pagenotfound/pagenotfound.component';
import { SignalsComponent } from './components/signals/signals.component';

export const routes: Routes = [
    { path: '', redirectTo: 'learn-dashboard', pathMatch: 'full' },
    { path: 'learn-dashboard', component: LearnDashboardComponent },
    { path: 'rxjs-operator', component: RxjsComponent },
    { path: 'crud-operation', component: CrudOperationComponent },
    { path: 'renderer', component: RendererTutorialComponent },
    { path: 'view-encapsulatons', component: ViesEncapsulationsComponent },
    { path: 'signals', component: SignalsComponent },
    { path: '**', component: PagenotfoundComponent }
];
