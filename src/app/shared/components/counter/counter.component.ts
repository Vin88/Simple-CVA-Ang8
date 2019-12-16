import { Component, OnInit, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor, FormControl } from '@angular/forms';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CounterComponent),
      multi: true
    }
  ]
})
export class CounterComponent implements ControlValueAccessor {
  public counter: number = 0;
  public disabled: boolean;
  constructor() {}

  /**
   * Function registered to propagate a change to the parent
   */
  public propagateChange: any = () => {};

  /**
   * Function registered to propagate touched to the parent
   */
  public propagateTouched: any = () => {};
  /**
   * ControlValueAccessor Interface Methods to be implemented
   */
  writeValue(obj: any): void {
    this.counter = obj;
  }
  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.propagateTouched = fn;
  }
  /** ControlValueAccessor Interface Methods to be implemented */

  public decrement() {
    this.counter = this.counter > 0 ? this.counter - 1 : 0;
    this.propagateChange(this.counter);
  }

  public increment() {
    this.counter = this.counter + 1;
    this.propagateChange(this.counter);
  }
}
