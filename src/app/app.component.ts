import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RxjsComponent } from "./components/rxjs/rxjs.component";
import { HeaderComponent } from "./shared/sharedComponet/header/header.component";
import { FooterComponent } from "./shared/sharedComponet/footer/footer.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RxjsComponent, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'rxjs-tutorial';
}
