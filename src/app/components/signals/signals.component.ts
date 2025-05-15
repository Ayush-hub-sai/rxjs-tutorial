import { Component, computed, effect, Signal, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-signals',
  imports: [],
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.scss'
})
export class SignalsComponent {

  withoutSignal = 10;
  withSignal = signal(20); // signal is a function that creates a signal and it is one type of wrapper that contains a value
  // signal is a reactive primitive that allows you to create reactive state in your application
  // signals are a way to create reactive state in your application


  constructor() {
    effect(() => {
      console.log('withoutSignal', this.withoutSignal);
      console.log('withSignal', this.withSignal());
    });
  }

  incrementWithoutSignal() {
    this.withoutSignal++;
  }

  decrementWithoutSignal() {
    this.withoutSignal--;
  }

  incrementWithSignal() {
    this.withSignal.set(this.withSignal() + 1);
  }

  decrementWithSignal() {
    this.withSignal.set(this.withSignal() - 1);
  }

  /**
   * 2 types of signals
   * 1. writable signals: signal() - allows you to create a signal that can be updated
   * 2. readable signals: computed() - allows you to create a signal that is derived from other signals
   * 3. effect() - allows you to create a signal that is derived from other signals and will automatically update when the signals change
   * 4. signal() - allows you to create a signal that can be updated and will automatically update when the signals change
   */

  // writable signals:
  writableSignal: WritableSignal<number | string | any> = signal(30); //updateable signal
  writableSignal2: WritableSignal<number> = signal(0); //updateable signal
  writableSignal3: WritableSignal<number> = signal(10); //updateable signal

  updateValue() {
    this.writableSignal.set("Hello");
    this.writableSignal2.update((val) => val + 1); //update the value of the signal
  }

  //computed signals:
  computedSignal: Signal<number> = computed(() => 200); //read only signal
  computedSignal2 = computed(() => this.writableSignal() + this.writableSignal3());

  udateComputedValue() {
    // this.writableSignal3.set(33);
    this.writableSignal3.update((val) => val + 33);
  }


  

}
