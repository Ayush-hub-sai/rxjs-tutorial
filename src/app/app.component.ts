import { Component, computed, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RxjsComponent } from "./components/rxjs/rxjs.component";
import { HeaderComponent } from "./shared/sharedComponet/header/header.component";
import { FooterComponent } from "./shared/sharedComponet/footer/footer.component";
import { SidebarComponent } from "./shared/sharedComponet/sidebar/sidebar.component";
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { BreakpointObserver,Breakpoints  } from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet, HeaderComponent, FooterComponent, SidebarComponent,
    MatSidenavModule, MatListModule, MatIconModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true,
})
export class AppComponent {
 // Signal to track if screen is small
  private isHandsetSignal = signal(false);

  // Computed signal to expose screen size info
  isScreenSmall = computed(() => this.isHandsetSignal());

  constructor(private breakpointObserver: BreakpointObserver) {
    // Watch screen size and update signal
    this.breakpointObserver
      .observe([Breakpoints.Handset, Breakpoints.Tablet])
      .subscribe(result => {
        this.isHandsetSignal.set(result.matches);
      });
  }
}
