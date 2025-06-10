import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { io, Socket } from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {
  private socket: Socket;
  private readonly URL = 'http://localhost:3000';

  constructor() {
    this.socket = io(this.URL);
  }

  registerUser(userId: string) {
    this.socket.emit('registerUser', userId);
  }

  listen(eventName: string): Observable<any> {
    return new Observable((subscriber) => {
      this.socket.on(eventName, (data) => {
        subscriber.next(data);
      });
    });
  }

  private notificationCount = new BehaviorSubject<number>(0);
  count$ = this.notificationCount.asObservable();

  incrementCount() {
    this.notificationCount.next(this.notificationCount.value + 1);
  }

  resetCount() {
    this.notificationCount.next(0);
  }

}
