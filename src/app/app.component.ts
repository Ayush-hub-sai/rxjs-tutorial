import { Component, OnInit } from '@angular/core';
import { WebSocketService } from './shared/sharedServices/notification/web-socket.service';
import { ToastrService } from 'ngx-toastr';
import { FooterComponent } from './shared/sharedComponet/footer/footer.component';
import { HeaderComponent } from './shared/sharedComponet/header/header.component';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, CommonModule]
})
export class AppComponent implements OnInit {
  notificationCount = 0;

  constructor(
    private socketService: WebSocketService,
    private toastr: ToastrService,

  ) { }

  ngOnInit(): void {
    // Receive WebSocket messages
    this.socketService.listen('assignment-approved').subscribe((data) => {
      this.toastr.success(data.message, 'Assignment Approved!');
      this.socketService.incrementCount();
    });

    // Subscribe to notification count
    this.socketService.count$.subscribe(count => {
      this.notificationCount = count;
    });
  }

  onBellClick() {
    this.socketService.resetCount();
    // Optionally open a modal/list here
  }
}
