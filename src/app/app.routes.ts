import { Routes } from '@angular/router';
import { RxjsComponent } from './components/rxjs/rxjs.component';
import { LearnDashboardComponent } from './shared/sharedComponet/learn-dashboard/learn-dashboard.component';
import { CrudOperationComponent } from './components/crud-operation/crud-operation.component';
import { RendererTutorialComponent } from './components/renderer-tutorial/renderer-tutorial.component';
import { ViesEncapsulationsComponent } from './components/vies-encapsulations/vies-encapsulations.component';
import { PagenotfoundComponent } from './shared/sharedComponet/pagenotfound/pagenotfound.component';
import { SignalsComponent } from './components/signals/signals.component';
import { PaymentComponent } from './components/payment/payment.component';
import { LogicBasedComponent } from './components/logic-based/logic-based.component';
import { EcommerceHeaderComponent } from './components/ecommerce-header/ecommerce-header.component';
import { ItemsComponent } from './components/ecommerce-header/items/items.component';
import { ViewChildNgContentComponent } from './components/view-child-ng-content/view-child-ng-content.component';
import { HostlistenerHostbindingComponent } from './components/hostlistener-hostbinding/hostlistener-hostbinding.component';
import { HtmlIssuesComponent } from './components/html-issues/html-issues.component';

export const routes: Routes = [
    { path: '', redirectTo: 'learn-dashboard', pathMatch: 'full' },
    { path: 'learn-dashboard', component: LearnDashboardComponent },
    { path: 'rxjs-operator', component: RxjsComponent },
    { path: 'crud-operation', component: CrudOperationComponent },
    { path: 'renderer', component: RendererTutorialComponent },
    { path: 'view-encapsulatons', component: ViesEncapsulationsComponent },
    { path: 'signals', component: SignalsComponent },
    { path: 'payment', component: PaymentComponent },
    { path: 'logic', component: LogicBasedComponent },
    { path: 'e-commerce', component: EcommerceHeaderComponent },
    { path: 'subcategory/:subcategoryId', component: ItemsComponent },
    { path: 'view-Child-ng-content', component: ViewChildNgContentComponent },
    { path: 'hostListener-hostBinding', component: HostlistenerHostbindingComponent },
    { path: 'html-design', component: HtmlIssuesComponent },
    { path: '**', component: PagenotfoundComponent }
];
