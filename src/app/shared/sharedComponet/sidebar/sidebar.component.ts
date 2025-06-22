import { Component, inject, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MediaMatcher } from '@angular/cdk/layout';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  imports: [
    MatToolbarModule, MatIconModule, MatIconModule, MatSidenavModule, MatListModule, 
    RouterLinkActive, RouterLink],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  routerList: any[] = [
    // {label:'Dashboard',route:'learn-dashboard'},
    { label: 'Rxjs', route: 'rxjs-operator' },
    { label: 'Crud', route: 'crud-operation' },
    { label: 'Renderer', route: 'renderer' },
    { label: 'View Encapsulation', route: 'view-encapsulatons' },
    { label: 'Signals', route: 'signals' },
    { label: 'Payment', route: 'payment' },
    { label: 'E-Commerce', route: 'e-commerce' },
    { label: 'View Child/Ng Content', route: 'view-Child-ng-content' },
    { label: 'Host Listener/Binding', route: 'hostListener-hostBinding' },
    { label: 'Captcha', route: 'captcha' },
    { label: 'Geo-Locations', route: 'locations' },
    { label: 'SSR', route: 'ssr' },
    { label: 'Chatbot', route: 'chatbot' },
    { label: 'Logic', route: 'logic' },
    { label: 'Html Design', route: 'html-design' },
  ]
}
