import { Component } from '@angular/core';
import { WebSocketService } from '../../shared/sharedServices/notification/web-socket.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-notification',
  imports: [],
  templateUrl: './notification.component.html',
  styleUrl: './notification.component.scss'
})
export class NotificationComponent {
  userId = 'user123'; // hardcoded for demo

  constructor(private socketService: WebSocketService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.socketService.registerUser(this.userId);

    // this.socketService.listen('assignment-approved').subscribe((data) => {
    //   this.toastr.success(data.message, 'Assignment Approved!');
    // });
  }

  simulateBackendApproval() {
    fetch(`http://localhost:3000/approve/${this.userId}`, { method: 'POST' });
  }

}
